import React from 'react';
import { Route, Routes, Navigate} from 'react-router-dom';
import LoginPage from "../components/auth/LoginPage";
import RegisterPage from "../components/auth/RegisterPage";
import {useSelector} from "react-redux";


const AuthRouter = () => {
    const { uid } = useSelector( state => state.auth);

    return (
        <div className="auth-main d-flex justify-content-center align-items-center m-0">
            <div className="bg-white auth-box-container p-4">
                <Routes>
                    <Route exact path="/login" element={ !!uid ?  (<Navigate to = '/' /> ) :(<LoginPage />)} />
                    <Route exact path="/register" element={ !!uid ?  (<Navigate to = '/' /> ) :(<RegisterPage /> ) } />
                </Routes>
            </div>
        </div>

    );
};

export default AuthRouter;