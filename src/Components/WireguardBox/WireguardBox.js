import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import iconWireguard from './iconWireguard.svg';

import './WireguardBox.css';


class WireguardBox extends React.Component {
  render() {
      return (
      <div>
        <Row className="wireguard-box">
          <Col sm={3}>
            <img src={iconWireguard} className="wireguard-logo" alt=""></img>
          </Col>
          <Col>
            <Row>
              <p className='wireguard-text-1'>Wireguard</p>
            </Row>
            <Row>
              <p className='wireguard-text-2'>VPN blocking uses WireGuard. Configurations can be downloaded when creating new devices.</p>
            </Row>
          </Col>
        </Row>
        <Row className='wireguard-tm'>
          <p className='wireguard-text-3'>
            "WireGuard" and the "WireGuard" logo are registered trademarks of Jason A. Donenfeld.
          </p>
        </Row>
      </div>
      );
  }
}

export default WireguardBox;