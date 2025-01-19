import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
import { Navbar } from '../../Components';

function Contact() {
    return (
        <>
            <Navbar />
            <div className="secContact container py-5">
                <h2 className="text-center mb-4">Contact Us</h2>
                <form className="p-4 rounded shadow">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your full name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="subject" className="form-label">Subject</label>
                        <input type="text" className="form-control" id="subject" placeholder="Enter subject" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" rows="4" placeholder="Write your message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Send Message</button>
                </form>
            </div>
        </>
    )
}

export default Contact;
