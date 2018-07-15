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
          <Navbar />
          <br></br><br></br><br></br>
          <Route exact path="/" component={Home} />
          <Route path="/committees" component={Committees} />
          <Route path="/com/UNSC" component={UNSC} />
          <Route path="/com/DISEC" component={DISEC} />
          <Route path="/com/UNHRC" component={UNHRC} />
          <Route path="/com/IP" component={IP} />
          <Route path="/com/MSC" component={MSC} />
          <Route path="/com/ESS" component={ESS} />
          <Route path="/Team" component={Sec} />
          <Route path="/applications" component={Applications} />
          <Route path="/Payment" component={Payment} />
          <Route path="/sponsors" component={Sponsors} />
          <Route path="/contactus" component={ContactUs} />
        </div>
      </Router>
      
      </View>
    );
  }
}

export default App;