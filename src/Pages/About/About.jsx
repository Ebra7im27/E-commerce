import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer, Navbar } from '../../Components';

const About = () => {
    const navigate = useNavigate()

    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">About Us</h1>
                <hr />
                <p className="lead text-center">
                    At our company, we are dedicated to providing high-quality products and exceptional service to our valued customers. Our mission is to inspire confidence, comfort, and style through our carefully curated selection of products. We believe in creating an unforgettable shopping experience, built on trust, innovation, and customer satisfaction.
                    Our journey started with a vision to bring the best of fashion, jewelry, and electronics to our community, and we take pride in being a trusted destination for all your needs. Whether you're looking for trendy clothing, timeless accessories, or the latest tech gadgets, we've got you covered.
                    Join us as we continue to grow, innovate, and redefine what it means to deliver excellence. Thank you for being part of our story. Together, we aim to create a future filled with style, convenience, and endless possibilities.
                </p>
                
                <h2 className="text-center py-4">Our Products</h2>
                <div className="row">
                    <div className="col-md-3 col-sm-6 mb-3 px-3">
                        <div className="card h-100" onClick={() => navigate('/products')}>
                            <img
                                className="card-img-top img-fluid"
                                src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Men's Clothing"
                                height={160}
                                style={{ cursor: 'pointer' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title text-center">Men's Clothing</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-3 px-3">
                        <div className="card h-100" onClick={() => navigate('/products')}>
                            <img
                                className="card-img-top img-fluid"
                                src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Women's Clothing"
                                height={160}
                                style={{ cursor: 'pointer' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title text-center">Women's Clothing</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-3 px-3">
                        <div className="card h-100" onClick={() => navigate('/products')}>
                            <img
                                className="card-img-top img-fluid"
                                src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Jewelery"
                                height={160}
                                style={{ cursor: 'pointer' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title text-center">Jewelery</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-3 px-3">
                        <div className="card h-100" onClick={() => navigate('/products')}>
                            <img
                                className="card-img-top img-fluid"
                                src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Electronics"
                                height={160}
                                style={{ cursor: 'pointer' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title text-center">Electronics</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About
