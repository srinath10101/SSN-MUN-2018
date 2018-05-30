import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Committees from './components/Committees';
import News from './components/News';
import Ip from './components/Ip';
import Sec from './components/Sec';
import Navbar from './components/CustomNavbar';
import Applications from "./components/Applications";
import Sponsors from "./components/Sponsors";
import ContactUs from './components/ContactUs';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/committees" component={Committees} />
          <Route path="/news" component={News} />
          <Route path="/ip" component={Ip} />
          <Route path="/sec" component={Sec} />
          <Route path="/applications" component={Applications} />
          <Route path="/Sponsors" component={Sponsors} />
          <Route path="/ContactUs" component={ContactUs} />
        </div>
      </Router>
    );
  }
}

export default App;