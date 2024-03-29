import React from 'react';
import { Children } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const PrivateRoute = ({childen}) => {
     
    const {user} = useAuthState(auth) ;
    const location = useLocation() ;

    if (user){
        return Children ;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;