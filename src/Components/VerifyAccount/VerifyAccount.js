import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Form from '../Form/Form.js';
import { Button } from '../Button/Button';

import blokadaLogo from '../DesktopLogin/logo-blokada.svg';
import iconAccount from '../AccountDetails/ico_acc.png';

import './VerifyAccount.css';

class VerifyAccount extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <img src={blokadaLogo} className="blokada-logo" alt="" ></img>
        </Row>
        <Container className="verify-account">
          <Col style={{padding: "0", margin:"0"}}>
            <Row>
              <p style={{margin: "25px 30px 20px 30px"}} className="login-title">Verify account</p>
            </Row>
            <Row className="progress-bar">
              <span style={{width: "25%"}}></span>
            </Row>
            <Row>
              <p style={{margin: "20px 30px 25px 30px"}} className="subtitle-1">Verify the account ID from previous screen.</p>
            </Row>
            <Row>
              <Col xs={3} style={{padding: "0"}}>
                <img src={iconAccount} className="ico-acc" alt="" ></img>
              </Col>
              <Col style={{padding: "0", marginRight: "15px"}}>
                <Row>
                  <p style={{margin: "5px 30px 0 30px"}} className="subtitle-2">Account ID</p>
                </Row>
                <Row>
                  <Col style={{margin: "10px 15px 10px 15px"}}>
                    <Form />
                  </Col>
                </Row>
              </Col>
            </Row>
          <Row>
            <Col xs={3}  style={{margin: "20px 5px 30px 30px", padding: "0"}}>
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
            <Col style={{margin: "20px 30px 30px 10px", padding: "0"}}>
              <Button
                onClick={() => {
                console.log("Test test test");
                }}
                type="button"
                buttonStyle="btn--primary--solid"
                buttonSize="btn--large"
                >
                Continue
              </Button>
            </Col>
          </Row>
          </Col>
        </Container>
        </div>
    );
  }
}

export default VerifyAccount;