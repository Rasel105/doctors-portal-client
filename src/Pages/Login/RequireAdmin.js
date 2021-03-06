import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { useLocation, Navigate } from "react-router-dom";
import useAdmin from '../../hooks/useAdmin';
import { signOut } from 'firebase/auth';


const RequireAdmin = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    let location = useLocation();

    if (loading || adminLoading) {
        return <Loading />
    }

    if (!user || !admin) {
        signOut(auth)
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAdmin;