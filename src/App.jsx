import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Committees from './components/Committees';
import News from './components/News';
import Ip from './components/Ip';
import Sec from './components/Sec';
import Navbar from './components/CustomNavbar';

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
        </div>
      </Router>
    );
  }
}

export default App;