import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <Container>
                    <Row className="row-text">
                        <Col className="footer-text" xs sm md="auto">
                            <p>© Blokada.org 2016-2019</p>
                        </Col>
                        <Col className="footer-text" xs sm md="auto">
                            <p>Blokada.org</p>
                        </Col>
                        <Col className="footer-text" xs sm md="auto">
                            <p>·</p>
                        </Col>
                        <Col className="footer-text" xs sm md="auto">
                            <p>Privacy Policy</p>
                        </Col>
                        <Col className="footer-text" xs sm md="auto">
                            <p>·</p>
                        </Col>
                        <Col className="footer-text" xs sm md="auto">
                            <p>Terms Of Service</p>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}

export default Footer;