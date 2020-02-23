import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Sidebar from '../Sidebar/Sidebar.js';
import Form from '../Form/Form.js';
import DropdownGate from '../DropdownGate/DropdownGate.js';
import DropdownDns from '../DropdownDns/DropdownDns.js';
import { Button } from '../Button/Button';

import qrcode from './QRCode.png';

import './NewDevice.css';

class NewDevice extends React.Component {
    render() {
        return (
            <div>
                <Container className="new-device">
                    <Row>
                    <Sidebar />
                    <Col>
                        <Row className="title">
                            Add new device
                        </Row>
                        <Row className="subtitle">
                            Device name    
                        </Row>
                        <Row>
                          <Col className="box-placement-1">
                            <Form />
                          </Col>
                        </Row>
                        <Row className="subtitle">
                            Gate
                        </Row>
                        <Row>
                          <Col className="box-placement-1">
                              <DropdownGate />
                          </Col>
                        </Row>
                        <Row className="subtitle">
                            DNS    
                        </Row>
                        <Row>
                          <Col  className="box-placement-1">
                            <DropdownDns />
                          </Col>
                        </Row>
                        <Row className="subtitle">
                            Public key    
                        </Row>
                        <Row>
                          <Col className="box-placement-1">
                            <Form />
                          </Col>
                        </Row>
                        <Row className="box-placement-2">
                            <Col>
                                <Button
                                    onClick={() => {
                                    console.log("Test test test");
                                    }}
                                    type="button"
                                    buttonStyle="btn--primary--solid"
                                    buttonSize="btn--large"
                                    >
                                    Cancel
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
                        <Row className="line-placement-1">
                          <Col style={{
                            height: "1px", 
                            backgroundColor:"#ccd5ea"
                            }}>
                          </Col>
                        </Row>
                        <Row className="wireguard-placement">
                          <Col xs={5}>
                          <img src={qrcode} className="qr-code" alt="" ></img>
                          </Col>
                          <Col>
                            <Row className="wiregurad-text-1">
                              Wireguard configuration
                            </Row>
                            <Row className="wiregurad-text-2">
                              Description about usage & instalation...
                            </Row>
                            <Row className="btn-placement-99">
                              <Button
                                  onClick={() => {
                                  console.log("Test test test");
                                  }}
                                  type="button"
                                  buttonStyle="btn--primary--solid"
                                  buttonSize="btn--large"
                                  >
                                  Download configuration
                              </Button> 
                            </Row>
                          </Col>
                        </Row>
                    </Col>
                    </Row>
                </Container>
              </div>
        );
    }
}

export default NewDevice;