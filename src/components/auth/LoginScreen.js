import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLoginEmailPassword, startGoogleLogin, startFacebookLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {
    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        email: 'danilo@gmail.com',
        password: '123456',
    });
    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));
        console.log(email, password);
    };

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    };

    const handleFacebookLogin = () => {
        dispatch(startFacebookLogin());
    };

    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="auth__input"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />
                <button type="submit" className="btn btn-primary btn-block">
                    Login
                </button>
                <hr />
                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div className="google-btn" onClick={handleGoogleLogin}>
                        <div className="google-icon-wrapper">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="google button"
                                className="google-icon"
                            />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with Google</b>
                        </p>
                    </div>

                    <div className="google-btn" onClick={handleFacebookLogin}>
                        <div className="google-icon-wrapper">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/archive/1/1b/20140711185504%21Facebook_icon.svg"
                                alt="google button"
                                className="google-icon"
                            />
                        </div>
                        <p className="btn-text btn-text-facebook">
                            <b>Sign in with Facebook</b>
                        </p>
                    </div>
                </div>
                <Link to="/auth/register" className="link">
                    Create new account
                </Link>
            </form>
        </>
    );
};
