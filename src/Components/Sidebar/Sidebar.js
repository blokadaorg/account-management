import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import icon from './ico-blokada.svg';
import iconAdd from './ico-add.svg';
import iconLock from './ico-3.svg';
import iconPerson from './ico-4.svg';
import iconLogOut from './ico-log-out.svg'

import './Sidebar.css'; 

class Sidebar extends React.Component {
  render() {
      return (
        <Row className="fixedWidth">
          <Col className="col-center-2">
            <img src={icon} className="App-logo" alt="" />
          </Col>
          <Col className="col-center">
            <img src={iconAdd} className="icon" alt="" />
          </Col>
          <Col className="col-center">
            <img src={iconLock} className="icon" alt="" />
          </Col>
          <Col className="col-center">
            <img src={iconPerson} className="icon" alt="" />
          </Col>
          <Col></Col>
          <Col className="col-center">
            <img src={iconLogOut} className="icon" alt="" />
          </Col>
        </Row>
      );
  }
}

export default Sidebar;