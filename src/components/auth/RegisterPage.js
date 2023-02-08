import React from 'react';
import {Link} from "react-router-dom";
import {startRegister} from "../../actions/auth";
import {useDispatch} from "react-redux";
import {useForm} from "../../hooks/useForm";
import Swal from "sweetalert2";

const RegisterPage = () => {

    const [ formValues, handleInputChange ] = useForm({});

    const { name, email, password1, password2 } = formValues;
    const dispatch = useDispatch();

    const handleRegister = (e) => {
        e.preventDefault();

        if ( password1 !== password2 ) {
            return Swal.fire('Error', 'Las contraseñas deben de ser iguales','error');
        }
        dispatch( startRegister(name, email, password1));
    }

    return (
        <>
            <h3 className="auth-tittle mb-4">Register</h3>

            <form onSubmit={handleRegister}>
                <input
                    type='text'
                   placeholder="Name"
                   name="name"
                   className="auth-input"
                   autoComplete="off"
                   value={name}
                   onChange={handleInputChange}
                />
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
                    name="password1"
                    required
                    className="auth-input"
                    value={password1}
                    onChange={handleInputChange}
                />
                <input
                    type='password'
                    placeholder="Confirm password"
                    name="password2"
                    required
                    className="auth-input"
                    value={password2}
                    onChange={handleInputChange}
                />
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