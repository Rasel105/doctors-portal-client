import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyAppoinment = () => {
    const [appointment, setAppoinment] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patientEmail=${user.email}`, {
                method: "GET",
                headers: {
                    'authorization': `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
                .then(res => {
                    console.log("Res", res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem("accessToken");
                        navigate("/");
                    }
                    return res.json()
                })
                .then(data => {
                    setAppoinment(data)
                });
        }
    }, [user, navigate])

    return (
        <div>
            <h2>My appointments {appointment.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>S.L</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointment.map((a, index) =>
                                <tr key={a._id} class="hover">
                                    <th>{index + 1}</th>
                                    <td>{a.patient}</td>
                                    <td>{a.date}</td>
                                    <td>{a.slot}</td>
                                    <td>{a.treatment}</td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyAppoinment;