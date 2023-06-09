import React from 'react'
import { Navigate } from 'react-router-dom'
import { isAuthenticated } from '../../utils/auth'

function PrivateRoute({ children }: { children: JSX.Element }): JSX.Element {
    return isAuthenticated() ? children : <Navigate to={"/login"} replace />;
}

export default PrivateRoute