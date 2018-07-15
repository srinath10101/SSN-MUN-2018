import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {View, Linking} from 'react-native';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar fixedTop default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/committees" to="/committees">
              Committees
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/apply" to="/apply">
              Delegate Applications
            </NavItem>
            <NavItem eventKey={4} componentClass={Link} href="/Payment" to="/Payment">
              Payment
            </NavItem>
            <NavItem eventKey={5} componentClass={Link} href="/Team" to="/Team">
              The Organising Team
            </NavItem>
            <NavItem eventKey={6} componentClass={Link} href="/Sponsors" to="/Sponsors">
              Sponsors
            </NavItem>
            <NavItem eventKey={7} componentClass={Link} href="/ContactUs" to="/ContactUs">
              Contact Us
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}