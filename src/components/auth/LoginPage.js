import React from 'react';
import { NavLink} from "react-router-dom";
import {useForm} from "../../hooks/useForm";
import {useDispatch} from "react-redux";
import {stratLogin} from "../../actions/auth";

const LoginPage = () => {

    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm({
        email: 'sheilafundora04@gmail.com',
        password: '123456789'
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( stratLogin(email, password));
    }

    return (
        <>
            <h3 className="auth-tittle mb-4">Login</h3>

            <form onSubmit={handleLogin}>
                <input
                    type='email'
                    placeholder="Email"
                    name="email"
                    required
                    className="auth-input"
                    autoComplete="pff"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type='password'
                    placeholder="Password"
                    name="password"
                    required
                    className="auth-input"
                    value={password}
                    onChange={handleInputChange}
                />

                <button type="submit" className="btn btn-my-primary w-100 mt-2" >Login</button>


                <div className="mt-4">
                    <NavLink to='/auth/register' className="link">
                        Create new account
                    </NavLink>
                </div>

            </form>
        </>
    );
};

export default LoginPage;