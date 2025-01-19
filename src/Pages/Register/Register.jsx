import React, { useRef, useState, useEffect } from "react";
import "./Register.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const [UserInfo, setUserInfo] = useState({})
    const userNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const [errors, setErrors] = useState({})

    const handleRegister = () => {
        const userName = userNameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value

        let validationErrors = {}

        if (userName === "") {
            validationErrors.userName = "Please enter your username."
        }
        if (email === "") {
            validationErrors.email = "Please enter your email address."
        }
        if (password === "") {
            validationErrors.password = "Please enter your password."
        }
        else if (password.length < 8) {
            validationErrors.password = "Password must be at least 8 characters long."
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({})

            // Set user info in state
            setUserInfo({
                Name: userName,
                Email: email,
                Password: password,
            })

            toast.success("Registration successful! Redirecting to login...")
        }
    }

    // Save user info to localStorage
    useEffect(() => {
        if (Object.keys(UserInfo).length > 0) {
            localStorage.setItem("UserInfo", JSON.stringify(UserInfo))
            setTimeout(() => {
                window.location = "/login"
            }, 5000)
        }
    }, [UserInfo])

    return (
        <>
            <div className="sec-register">
                <div className="form-container">
                    <h2 className="titleReg">Register</h2>
                    <div className="form" noValidate>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text"
                                className={`form-control ${errors.userName ? 'is-invalid' : ''}`}
                                id="username"
                                name="username"
                                ref={userNameRef}
                            />
                            {errors.userName && <div className="invalid-feedback">{errors.userName}</div>}
                        </div>
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
                            <label className="form-check-label" htmlFor="flexCheckDefault"> &nbsp;I accept all terms and conditions</label>
                        </div>
                        <button onClick={handleRegister} className="btn btn-primary w-100 btnReg">Register</button>
                        <div className="text-center mt-3">
                            <p> Already have an account? <a href="/login">Login</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Register