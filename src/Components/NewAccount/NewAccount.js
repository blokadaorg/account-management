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
        <img src={blokadaLogo} className="blokada-logo" alt="" ></img>
        <Container className="desktop-login">
          <Row>
            <Row style={{margin: "25px 30px 25px 30px"}}>
              <p className="login-title">New account</p>
            </Row>
            <Row style={{margin: "5px 30px 25px 30px"}}>
              <p className="subtitle-1">Save the account ID in a safe place, you will need it to activate your device.</p>
            </Row>
            <Row style={{margin: "5px 30px 0 30px"}}>
              <p style={{marginBottom: "0"}} className="subtitle-2">Account ID</p>
            </Row>
          </Row>
          <Row>
            <Col style={{margin: "10px 10px 10px 10px"}}>
              <Form />
            </Col>
          </Row>
          <Row>
            <Col style={{margin: "20px 25px 30px 25px", padding: "0"}}>
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
        </Container>
        </div>
    );
  }
}

export default NewAccount;