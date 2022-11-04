import React from 'react';
import {Link} from "react-router-dom";

const RegisterPage = () => {
    return (
        <>
            <h3 className="auth-tittle mb-4">Register</h3>

            <form>
                <input type='text' placeholder="Email" name="email" className="auth-input" autoComplete="pff" />
                <input type='text' placeholder="Name" name="name" className="auth-input" autoComplete="pff" />
                <input type='password' placeholder="Password" name="password" className="auth-input" />
                <input type='password' placeholder="Confirm Password" name="password2" className="auth-input" />
                <button type="submit" className="btn btn-my-primary w-100 mt-2" >Register</button>


                <div className="mt-4">
                    <Link to='/auth/login' className="link">
                        Already Register?
                    </Link>
                </div>

            </form>
        </>
    );
};

export default RegisterPage;