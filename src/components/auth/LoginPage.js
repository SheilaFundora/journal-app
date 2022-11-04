import React from 'react';
import {Link} from "react-router-dom";

const LoginPage = () => {
    return (
        <>
            <h3 className="auth-tittle mb-4">Login</h3>

            <form>
                <input type='text' placeholder="Email" name="email" className="auth-input" autoComplete="pff" />
                <input type='password' placeholder="Password" name="password" className="auth-input" />
                <button type="submit" className="btn btn-my-primary w-100 mt-2" >Login</button>

                <div className="d-flex justify-content-center align-items-center flex-column w-100 px-4 mt-4">
                    <p>Login with social network</p>
                    <div className="google-btn">
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <div className="mt-4">
                    <Link to='/auth/register' className="link">
                        Create new account
                    </Link>
                </div>

            </form>
        </>
    );
};

export default LoginPage;