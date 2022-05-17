import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="auth__input"
                    autoComplete="off"
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="auth__input"
                    autoComplete="off"
                />
                <input
                    type="text"
                    name="password"
                    placeholder="Password"
                    className="auth__input"
                    autoComplete="off"
                />
                <input
                    type="text"
                    name="confirm-password"
                    placeholder="Confirm password"
                    className="auth__input"
                    autoComplete="off"
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>
                <span>
                    Already register?{' '}
                    <Link to="/auth/login" className="link">
                        Login
                    </Link>
                </span>
            </form>
        </>
    );
};
