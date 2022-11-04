import React from 'react';
import { Route, Routes, Navigate} from 'react-router-dom';
import LoginPage from "../auth/LoginPage";
import RegisterPage from "../auth/RegisterPage";


const AuthRouter = () => {
    return (
        <div className="auth-main d-flex justify-content-center align-items-center m-0">
            <div className="bg-white auth-box-container p-4">
                <Routes>
                    <Route exact path="/login" element={ <LoginPage /> } />
                    <Route exact path="/register" element={ <RegisterPage /> } />
                    <Route exact render={() => <Navigate to="/auth/login" />} />
                </Routes>
            </div>

        </div>

    );
};

export default AuthRouter;