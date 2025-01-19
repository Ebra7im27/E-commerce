import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Pagenotfound.css';
// import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    // const navigate = useNavigate()

    return (
        <Container fluid className="page-not-found">
            <Row className="justify-content-center align-items-center text-center">
                <Col md={6}>
                    <h1 className="error-code">404 !</h1>
                    <h2 className="error-message">Page Not Found</h2>
                    <p className="error-description">
                        Sorry, the page you’re looking for doesn’t exist. It might have been moved or deleted.
                    </p>
                    {/* This method is similar to the method used in Comment (navigate) */}
                    <Button variant="success" href="/" className="go-back-btn">
                        Go Back to Home
                    </Button>

                    {/* <Button onClick={() => navigate('/')} variant="success" className="go-back-btn">
                        Go Back to Home
                    </Button> */}
                </Col>
            </Row>
        </Container>
    )
}

export default PageNotFound