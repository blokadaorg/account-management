import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Form from '../Form/Form.js';
import { Button } from '../Button/Button';

import blokadaLogo from '../DesktopLogin/logo-blokada.svg';

import './NewAccount.css';

class NewAccount extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <img src={blokadaLogo} className="blokada-logo" alt="" ></img>
        </Row>
        <Container className="new-account">
          <Col style={{padding: "0", margin:"0"}}>
            <Row>
              <p style={{margin: "25px 30px 20px 30px"}} className="login-title">New account</p>
            </Row>
            <Row className="progress-bar">
              <span style={{width: "25%"}}></span>
            </Row>
            <Row>
              <p style={{margin: "20px 30px 25px 30px"}} className="subtitle-1">Save the account ID in a safe place, you will need it to activate your device.</p>
            </Row>
            <Row>
              <p style={{margin: "5px 30px 0 30px"}} className="subtitle-2">Account ID</p>
            </Row>
            <Row>
            <Col style={{margin: "10px 15px 10px 15px"}}>
              <Form />
            </Col>
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

export default NewAccount;