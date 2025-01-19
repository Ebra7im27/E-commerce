import React, { useRef, useState } from "react";
import './ForgotPassword.css';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

function ForgotPassword() {
    const emailRef = useRef()
    const [newPassword, setNewPassword] = useState("")
    const [errors, setErrors] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate()

    const handleResetPassword = () => {
        const email = emailRef.current.value
        const userInfo = JSON.parse(localStorage.getItem("UserInfo"))

        if (!email) {
            setErrors("Please enter your email address.")
            toast.error("Please enter your email address.")
            return
        }

        if (userInfo && userInfo.Email.toLowerCase() === email.toLowerCase()) {
            setErrors("");
            setMessage("Please enter a new password below.....")
            toast.success("Email verified. Please enter a new password.")
        } else {
            setErrors("The email address is not found. Please check your email and try again.")
            toast.error("The email address is not found. Please check your email and try again.")
        }
    };

    const handlePasswordChange = (e) => {
        setNewPassword(e.target.value)
    }

    const handleSavePassword = () => {
        if (!newPassword) {
            toast.error("Please enter a new password.")
            return
        }

        if (newPassword.length < 8) {
            toast.error("Password must be at least 8 characters long.")
            return
        }

        const userInfo = JSON.parse(localStorage.getItem("UserInfo"))
        userInfo.Password = newPassword
        localStorage.setItem("UserInfo", JSON.stringify(userInfo))

        toast.success("Your password has been successfully updated.")

        setTimeout(() => {
            navigate("/login")
        }, 5000)
    }

    return (
        <>
            <div className="forgot-password-section">
                <h2 className="forgot-password-title">Forgot Password</h2>
                <div className="forgot-password-form">
                    <div className="forgot-password-input-group">
                        <label htmlFor="email" className="forgot-password-label">Email Address</label>
                        <input
                            type="email"
                            className={`forgot-password-input ${errors ? 'is-invalid' : ''}`}
                            id="email"
                            ref={emailRef}
                        />
                        {errors && <div className="forgot-password-error">{errors}</div>}
                    </div>

                    <button type="button" className="forgot-password-btn w-100" onClick={handleResetPassword}>
                        Send Reset Link
                    </button>

                    {message && <div className="forgot-password-message mt-3">{message}</div>}

                    {message && (
                        <div className="forgot-password-input-group">
                            <label htmlFor="newPassword" className="forgot-password-label">New Password</label>
                            <input
                                type="password"
                                className={`forgot-password-input ${errors ? 'is-invalid' : ''}`}
                                id="newPassword"
                                value={newPassword}
                                onChange={handlePasswordChange}
                            />
                            {errors && <div className="forgot-password-error">{errors}</div>}
                        </div>
                    )}

                    {newPassword && (
                        <button type="button" className="forgot-password-btn w-100" onClick={handleSavePassword}>
                            Save Password
                        </button>
                    )}
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default ForgotPassword