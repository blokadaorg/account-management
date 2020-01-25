import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import icon from './ico-blokada.svg';
import iconAdd from './ico-add.svg';
import iconLock from './ico-3.svg';
import iconPerson from './ico-4.svg';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col className="fixedWidth">
            <Container>
              <Row>
                <Col className="col-center">
                <img src={icon} className="App-logo" alt="" />
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col className="col-center">
                  <img src={iconAdd} className="icon" alt="" />
                </Col>
              </Row>
              <Row>
                <Col className="col-center">
                  <img src={iconLock} className="icon" alt="" />
                </Col>
              </Row>
              <Row>
                <Col className="col-center">
                  <img src={iconPerson} className="icon" alt="" />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <p>Content testowy<br/><br/><br/><br/><br/><br/></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
