import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Sidebar from '../Sidebar/Sidebar.js';
import Form from '../Form/Form.js';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch.js';

import iconAccount from './ico_acc.png';
import iconHide from './hide.svg';

import './AccountDetails.css';

class AccountDetails extends React.Component {
  render() {
    return (
      <div>
        <Container className="acc-details">
          <Row>
          <Sidebar />
          <Col>
            <Row className="title">
                Account details
            </Row>
            <Row className="row-placement">
              <Col xs={3}>
                <img src={iconAccount} className="ico-acc" alt="" ></img>
              </Col>
              <Col style={{padding: "0px"}}>
                <Row className="test">
                  <p style={{marginBottom: "1px"}} className="subtitle-3">Account ID</p>
                </Row>
                <Row>
                  <Col>
                    <Form />
                  </Col>
                  <Col xs={1} className="ico-align">
                  <img src={iconHide} className="ico-hide" alt="" ></img>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="line-placement-1">
              <Col style={{
                height: "1px", 
                backgroundColor:"#ccd5ea"
                }}>
              </Col>
            </Row>
            <Row className="title">
              Service details
            </Row>
            <Row style={{marginLeft: "30px"}}>
              <p style={{marginBottom: "5px", marginTop: "25px"}}
              className="subtitle-3">Service duration</p>
            </Row>
            <Row style={{marginLeft: "30px"}}>
              <p className="subtitle-2">6 months (47 days left)</p>
            </Row>
            <Row style={{marginLeft: "30px"}}>
              <p style={{marginBottom: "5px", marginTop: "5px"}}
              className="subtitle-3">Selected currency</p>
            </Row>
            <Row style={{marginLeft: "30px"}}>
              <p className="subtitle-2">EUR</p>
            </Row>
            <Row style={{marginLeft: "30px"}}>
              <p style={{marginBottom: "5px", marginTop: "5px"}}
              className="subtitle-3">Payment method</p>
            </Row>
            <Row style={{marginLeft: "30px"}}>
              <p className="subtitle-2">Credit Card</p>
            </Row>
            <Row style={{margin: "30px 15px 50px 30px"}}>
              <Col style={{padding: "0"}}>
              <p className="subtitle-2">Renew automatically when it expires</p>
              </Col>
              <Col xs={1} style={{padding: "0"}}>
                <ToggleSwitch />
              </Col>
            </Row>
          </Col>
          </Row>
        </Container>
        </div>
    );
  }
}

export default AccountDetails;