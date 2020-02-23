import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Sidebar from '../Sidebar/Sidebar.js';
import { Button } from '../Button/Button';

import iconLock from './ico-3-grey.svg';

import './EditDevice.css';

class EditDevice extends React.Component {
    render() {
        return (
            <div>
                <Container className="edit-device">
                    <Row>
                    <Sidebar />
                    <Col>
                        <Row className="title">
                            OnePlus-OnePlus7T
                        </Row>
                        <Row className="subtitle">
                            Device name    
                        </Row>
                        <Row className="btn-placement-3">
                        <Button
                            type="button"
                            buttonStyle="btn--primary--inactive"
                            buttonSize="btn--large"
                            >
                            <Row>
                                <Col xs="auto">
                                OnePlus-OnePlus7T
                                </Col>
                                <Col className="ico-align">
                                <img src={iconLock} className="ico-lock" alt="" />
                                </Col>
                            </Row>
                        </Button>
                        </Row>
                        <Row className="subtitle">
                            Gate
                        </Row>
                        <Row className="btn-placement-3">
                        <Button
                            type="button"
                            buttonStyle="btn--primary--inactive"
                            buttonSize="btn--large"
                            >
                            <Row>
                                <Col xs="auto">
                                (Europe-West2)
                                </Col>
                                <Col className="ico-align">
                                <img src={iconLock} className="ico-lock" alt="" />
                                </Col>
                            </Row>
                        </Button>
                        </Row>
                        <Row className="subtitle">
                            DNS    
                        </Row>
                        <Row className="btn-placement-3">
                        <Button
                            type="button"
                            buttonStyle="btn--primary--inactive"
                            buttonSize="btn--large"
                            >
                            <Row>
                                <Col xs="auto">
                                Cloudflare
                                </Col>
                                <Col className="ico-align">
                                <img src={iconLock} className="ico-lock" alt="" />
                                </Col>
                            </Row>
                        </Button>
                        </Row>
                        <Row className="subtitle">
                            Public key    
                        </Row>
                        <Row className="field-placement-1">
                          <Col xs="auto" className="textfield-box">
                            <input 
                            type="text" 
                            id="pkey" 
                            name="publickey" 
                            placeholder="tidGfyI+T9sGhXkMdG13QnEWdLNOw1COljlBFwSunGQ="
                            className="textfield">
                            </input>
                          </Col>
                        </Row>
                        <Row className="btn-placement-4">
                            <Col>
                                <Button
                                    onClick={() => {
                                    console.log("Test test test");
                                    }}
                                    type="button"
                                    buttonStyle="btn--primary--solid"
                                    buttonSize="btn--large"
                                    >
                                    Back
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    onClick={() => {
                                    console.log("Test test test");
                                    }}
                                    type="button"
                                    buttonStyle="btn--primary--solid"
                                    buttonSize="btn--large"
                                    >
                                    Remove device
                                </Button> 
                            </Col>
                        </Row>
                        <Row style={{minHeight:"75px"}}>
                        </Row>
                    </Col>
                    </Row>
                </Container>
              </div>
        );
    }
}

export default EditDevice;