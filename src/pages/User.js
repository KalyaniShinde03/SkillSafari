import React, { useState } from 'react';
import user from '../asset/images/user.png';

const User = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const [loginObj, setLoginObj] = useState({ email: '', password: '' });
    const [isFormSubmitted, setisFormSubmitted] = useState(false);

    const changeFormValues = (event, key) => {
        setLoginObj(prevObj => ({ ...prevObj, [key]: event.target.value }));
    }

    const SaveLogin = () => {
        setisFormSubmitted(true);
        if (isValid) {
            alert('Login Successful');
        }
    }

    // Check if form is valid
    const isValid = loginObj.email !== '' && loginObj.password !== '' && emailRegex.test(loginObj.email);

    return (
        <section className="login-section">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-4 col-md-6 col-sm-8">

                        <div className="card shadow-lg">
                            <div className='card-header'>
                                <h1 className="fs-4 card-title fw-bold text-primary text-center">Login</h1>

                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                    <img src={user} alt="logo" className="user-logo img-fluid" style={{ height: '80px', width: '80px' }} />
                                </div>
                                <form className="needs-validation" noValidate autoComplete="off">
                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="email"><strong>E-Mail</strong></label>
                                        <div className='col-12 input-group'>
                          <span className='input-group-text'><i className='fa fa-envelope'></i></span>

                                        <input id="email" type="email" className={`form-control ${isFormSubmitted && !loginObj.email && 'is-invalid'}`} name="email" value={loginObj.email} onChange={(e) => changeFormValues(e, 'email')} required autoFocus />
                                        </div>
                                        <div className="invalid-feedback">
                                            Please enter a valid email address.
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <div className="mb-2 w-100">
                                            <label className="text-muted" htmlFor="password"><strong>Password</strong></label>
                                            <a href="forgot.html" className="float-end text-decoration-none">
                                                Forgot Password?
                                            </a>
                                        </div>
                                        <div className='col-12 input-group'>
                          <span className='input-group-text'><i className='fa fa-lock'></i></span>

                                        <input id="password" type="password" className={`form-control ${isFormSubmitted && !loginObj.password && 'is-invalid'}`} name="password" value={loginObj.password} onChange={(e) => changeFormValues(e, 'password')} required />
                                        </div>
                                        <div className="invalid-feedback">
                                            Please enter your password.
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center mb-3">
                                        <div className="form-check">
                                            <input type="checkbox" name="remember" id="remember" className="form-check-input" />
                                            <label htmlFor="remember" className="form-check-label">Remember Me</label>
                                        </div>
                                        <button type="button" className="btn btn-primary ms-auto" onClick={SaveLogin}>
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer py-3 border-0">
                                <div className="text-center">
                                    Don't have an account? <a href="register.html" className="text-dark fw-bold">Create One</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default User;
