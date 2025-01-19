import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header() {
    const storedUserInfo = localStorage.getItem("UserInfo")
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const state = useSelector((state) => state.handleCart)

    const handleLogout = () => {
        localStorage.removeItem("UserInfo")
        setIsUserLoggedIn(false)
        toast.success("You have been logged out successfully!")
    }

    useEffect(() => {
        if (storedUserInfo) {
            setIsUserLoggedIn(true)
        } else {
            setIsUserLoggedIn(false)
        }
    }, [storedUserInfo])

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary sticky-top">
                <Container>
                    <Navbar.Brand href="/" className='fw-bold me-auto'>E-commerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto d-flex align-items-center gap-4">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/products">Products</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                        <div className="d-flex gap-2 ms-auto">
                            {isUserLoggedIn ? (
                                <>
                                    <NavLink to="/login" className="btn btn-outline-danger" onClick={handleLogout}>
                                        <i className="fas fa-sign-out-alt"></i> Logout
                                    </NavLink>
                                    <NavLink to={"/cart"} className='btn btn-outline-dark'>
                                        <i className="fas fa-shopping-cart"></i> Cart ({state.length})
                                    </NavLink>
                                </>
                            ) : (
                                <>
                                    <NavLink to="/login" className="btn btn-outline-dark">
                                        <i className="fas fa-sign-in-alt"></i> Login
                                    </NavLink>
                                    <NavLink to="/register" className="btn btn-outline-dark">
                                        <i className="fas fa-user-plus"></i> Register
                                    </NavLink>
                                    <NavLink to={"/cart"} className='btn btn-outline-dark'>
                                        <i className="fas fa-shopping-cart"></i> Cart ({state.length})
                                    </NavLink>
                                </>
                            )}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ToastContainer />
        </>
    )
}

export default Header