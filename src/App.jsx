import React, { Component, WebView } from 'react';
import {Text, View, ImageBackground} from 'react-native';
import {Image} from 'react-bootstrap';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Committees from './components/Committees';
import Sec from './components/Sec';
import Navbar from './components/CustomNavbar';
import Applications from "./components/Applications";
import Payment from "./components/Payment";
import Sponsors from "./components/Sponsors";
import ContactUs from './components/ContactUs';
import UNSC from './components/com/UNSC';
import DISEC from './components/com/DISEC';
import UNHRC from './components/com/UNHRC';
import MSC from './components/com/MSC';
import IP from './components/com/IP';
import ESS from './components/com/ESS';

class App extends Component {
  render() {
    return (
      <View>
    <Router>
        <div>
          {/* <Navbar /> */}
          <Route exact path="/" component={Home} />
          {/*<Route path="/committees" />
          <Route path="/com/UNSC"  />
          <Route path="/com/DISEC"  />
          <Route path="/com/UNHRC"  />
          <Route path="/com/IP"  />
          <Route path="/com/MSC"  />
          <Route path="/com/ESS"  />
          <Route path="/Team"  />
          <Route path="/applications"  />
          <Route path="/Payment"  />
          <Route path="/sponsors"  />
    <Route path="/contactus"  /> */}
        </div>
        </Router>
      </View>

    );
  }
}

export default App;