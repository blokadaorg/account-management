import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import Sidebar from './Components/Sidebar/Sidebar.js';
import WireGuard from './Components/WireguardBox/WireguardBox.js';
import { Button } from './Components/Button/Button';
import { Badge } from './Components/Badge/Badge';

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
                      <Col>
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
                <WireGuard />
              </Col>
            </Row>
          </Container>
          <Footer />
        </div>
      );
  }
}

export default App;
