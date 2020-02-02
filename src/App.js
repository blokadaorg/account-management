import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import Sidebar from './Components/Sidebar/Sidebar.js';

import './App.css';

class App extends React.Component {
  render() {
      return (
        <div className="App">
          <Header />
          <Container>
            <Row>
              <Sidebar />
              <Col>
                <Row className="title">
                  My devices
                </Row>
                <Row className="window-1">
                  <p className="text-1">
                    OnePlus-OnePlus7T
                  </p>
                </Row>
                <Row className="window-2">
                  <Col>
                    <p className="text-1">
                      Laptop ASUS 589
                    </p>
                  </Col>
                  <Col className="test">
                    <Badge className="badge-1">
                      <p className="badge-text">New device</p>
                    </Badge>
                  </Col>
                </Row>
                <Button className="window-3" block>
                  <p className="text-2">
                    Add new device
                  </p>
                </Button>
              </Col>
            </Row>
          </Container>
          <Footer />
        </div>
      );
  }
}

export default App;
