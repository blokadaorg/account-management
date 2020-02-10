import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Sidebar from '../Sidebar/Sidebar.js';
import WireGuard from '../WireguardBox/WireguardBox.js';
import { Button } from '../Button/Button';
import { Badge } from '../Badge/Badge';

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
                        <Row className="btn-placement-1">
                        <Button
                            onClick={() => {
                            console.log("Test test test");
                            }}
                            type="button"
                            buttonStyle="btn--primary--outline"
                            buttonSize="btn--large"
                            >
                            OnePlus-OnePlus7T
                        </Button>
                        </Row>
                        <Row className="btn-placement-2">
                        <Button
                            onClick={() => {
                            console.log("Test test test");
                            }}
                            type="button"
                            buttonStyle="btn--primary--outline"
                            buttonSize="btn--large"
                            >
                            <Row>
                            <Col>
                                Laptop ASUS 589
                            </Col>
                            <Col className="bdg-align">
                                <Badge
                                type="badge"
                                badgeStyle="bdg--primary--solid"
                                badgeSize="bdg--small"
                                >
                                New device
                                </Badge>
                            </Col>
                            </Row>

                        </Button>
                        </Row>
                        <Row className="btn-placement-2">
                        <Button
                            onClick={() => {
                            console.log("Test test test");
                            }}
                            type="button"
                            buttonStyle="btn--primary--solid"
                            buttonSize="btn--large"
                            >
                            Add new device
                        </Button>
                        </Row>
                        <Row className="empty-space-1">
                        </Row>
                    </Col>
                    </Row>
                </Container>
              </div>
        );
    }
}

export default EditDevice;