import React from 'react';
import { BrowserRouter as Router, Route } from 
'react-router-dom';

import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import MyDevices from './Components/MyDevices/MyDevices.js';
import EditDevice from './Components/EditDevice/EditDevice.js';

import './App.css';

class App extends React.Component {
  render() {
      return (
        <Router>
          <div>
            <div>
              <Header />
              <Route path="/" exact component={MyDevices} />
              <Route path="/editdevice" exact component={EditDevice} />
              <Footer />
            </div>
          </div>
        </Router>
      );
  }
}

export default App;
