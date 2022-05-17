import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* <!-- Page content here --> */}
                {/* <label for="dashboard-sidebar" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
                <Outlet />
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li className='mb-1'><Link to="/dashboard">My Appoinments</Link></li>
                    <li><Link to="/dashboard/myreview">My Reviews</Link></li>
                    <li><Link to="/dashboard/myhistory">My History</Link></li>
                    {admin && <>
                        <li><Link to="/dashboard/users">All User</Link></li>
                        <li><Link to="/dashboard/addDoctor">Add a Doctor</Link></li>
                        <li><Link to="/dashboard/manageDoctor">Manage Doctors</Link></li>
                    </>}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;