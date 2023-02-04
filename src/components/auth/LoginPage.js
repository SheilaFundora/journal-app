import React from 'react';
import {Link} from "react-router-dom";
import {useForm} from "../../hooks/useForm";
import {useDispatch} from "react-redux";
import {login, startGoogleLogin} from "../../actions/auth";

const LoginPage = () => {

    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm({
        email: 'nando@gmail.com',
        password: '123456'
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();//sino se recarga la paguna y se oierde todos
        dispatch( login(1234, "sheila"));
    }

    const handleGoogleLogin = () => {
        startGoogleLogin() ;
    }

    return (
        <>
            <h3 className="auth-tittle mb-4">Login</h3>

            <form onSubmit={handleLogin}>
                <input
                    type='text' placeholder="Email"
                    name="email" className="auth-input"
                    autoComplete="pff" value={email}
                    onChange={handleInputChange}
                />

                <input
                    type='password' placeholder="Password"
                    name="password" className="auth-input"
                    value={password} onChange={handleInputChange}
                />

                <button type="submit" className="btn btn-my-primary w-100 mt-2" >Login</button>


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