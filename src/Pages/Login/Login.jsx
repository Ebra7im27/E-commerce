import React, { useRef, useState } from "react";
import "./Login.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [errors, setErrors] = useState({})

    const handleLogin = () => {
        const UserInfo = JSON.parse(localStorage.getItem("UserInfo"))
        const email = emailRef.current.value
        const password = passwordRef.current.value

        let validationErrors = {}

        if (email === "") {
            validationErrors.email = "Please enter your email address."
        }
        if (password === "") {
            validationErrors.password = "Please enter your password."
        }
        

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
        } else {
            setErrors({})

            if (UserInfo && email.toLowerCase() === UserInfo.Email.toLowerCase() && password === UserInfo.Password) {
                toast.success("Login successful! Redirecting...")
                setTimeout(() => {
                    window.location = "/"
                }, 5000)
            } else {
                toast.error("Email or Password is incorrect!")
            }
        }
    }

    return (
        <>
            <div className="secLogin">
                <div className="form-container">
                    <h2>Login</h2>
                    <div className="form">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input
                                type="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                id="email"
                                name="email"
                                ref={emailRef}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                id="password"
                                name="password"
                                ref={passwordRef}
                            />
                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">&nbsp;Remember me</label>
                        </div>
                        <button type="button" className="btn btn-primary w-100 btnLog" onClick={handleLogin}>Login</button>
                        <div className="text-center mt-3">
                            <p> Don't have an account? <a href="/register">Register</a></p>
                            <a href="/ForgotPassword ">ForgotPassword </a>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Login