import React from 'react';
import { BrowserRouter as Router, Route } from 
'react-router-dom';

import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import MyDevices from './Components/MyDevices/MyDevices.js';
import EditDevice from './Components/EditDevice/EditDevice.js';
import NewDevice from './Components/NewDevice/NewDevice.js';
import AccountDetails from './Components/AccountDetails/AccountDetails.js';
import DesktopLogin from './Components/DesktopLogin/DesktopLogin.js';
import NewAccount from './Components/NewAccount/NewAccount.js';

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
              <Route path="/newdevice" exact component={NewDevice} />
              <Route path="/accountdetails" exact component={AccountDetails} />
              <Route path="/login" exact component={DesktopLogin} />
              <Route path="/newaccount" exact component={NewAccount} />
              <Footer />
            </div>
          </div>
        </Router>
      );
  }
}

export default App;
