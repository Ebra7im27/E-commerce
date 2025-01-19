import { Container } from 'react-bootstrap';
import React from 'react';

function Footer() {
    return (
        <footer className='bg-dark text-center py-4'>
            <Container>
                <div className='text-white'>
                    <a href='https://ebrahimelngar-app.surge.sh/' target='false' className='text-white text-decoration-none'>
                        &copy; 2024 Ebrahim Elngar | All Rights Reserved
                    </a>
                    <div className="iconContent d-flex justify-content-center mt-3" style={{ gap: '10px' }}>
                        <a href="https://www.facebook.com/ebrahim.elngar.98" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook fs-3" style={{ color: '#0866ff' }}></i>
                        </a>
                        <a href="https://wa.me/01068054735" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp fs-3" style={{ color: '#25D366' }}></i>
                        </a>
                        <a href="https://t.me/Ebrahim_elngar" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-telegram fs-3" style={{ color: '#0088cc' }}></i>
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
