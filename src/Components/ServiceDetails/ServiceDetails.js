import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { Button } from '../Button/Button';
import Toggle from '../Toggle/Toggle.js';

import blokadaLogo from '../DesktopLogin/logo-blokada.svg';

import './ServiceDetails.css';

class ServiceDetails extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <img src={blokadaLogo} className="blokada-logo" alt="" ></img>
        </Row>
        <Container className="service-details">
          <Col style={{padding: "0", margin:"0"}}>
            <Row>
              <p style={{margin: "25px 30px 20px 30px"}} className="login-title">Service details</p>
            </Row>
            <Row className="progress-bar">
              <span style={{width: "25%"}}></span>
            </Row>
            <Row>
              <p style={{margin: "20px 30px 25px 30px"}} className="subtitle-1">Select the currency.</p>
            </Row>
            <Row>
              <Col xs={3} style={{padding: "0", margin: "0 20px 0 30px", maxWidth: "72px"}}>
              <Button
                onClick={() => {
                console.log("Test test test");
                }}
                type="button"
                buttonStyle="btn--primary--unselected"
                buttonSize="btn--small"
                
                >
                $ USD
              </Button>
              </Col>
              <Col xs={3} style={{padding: "0", maxWidth: "72px"}}>
              <Button
                onClick={() => {
                console.log("Test test test");
                }}
                type="button"
                buttonStyle="btn--primary--unselected"
                buttonSize="btn--small"
                >
                € EUR
              </Button>
              </Col>
              <Col></Col>
            </Row>
            <Row style={{margin: "20px 15px 0 15px"}}>
              <Col style={{
                height: "1px", 
                backgroundColor:"#ccd5ea"
                }}>
              </Col>
            </Row>
            <Row>
              <p style={{margin: "20px 30px 25px 30px"}} className="subtitle-1">Select the duration of the service.</p>
            </Row>
            <Toggle>
              {({on, toggle}) => (
                <button>test</button>
              )}
            </Toggle>
            <Row style={{display: "flex", justifyContent: "flex-end", marginRight: "15px"}}>
              <p style={{marginBottom: "0px"}} className="subtitle-2">Total</p>
            </Row>
            <Row style={{display: "flex", justifyContent: "flex-end", marginRight: "15px"}}>
              <p className="subtitle-3">$ 27.00</p>
            </Row>
            <Row>
            <Col style={{margin: "20px 30px 30px 30px", padding: "0"}}>
              <Button
                onClick={() => {
                console.log("Test test test");
                }}
                type="button"
                buttonStyle="btn--primary--solid"
                buttonSize="btn--large"
                >
                Go to payment method
              </Button>
            </Col>
          </Row>
          </Col>
        </Container>
        </div>
    );
  }
}

export default ServiceDetails;