import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {View} from 'react-native';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      <View>
      <Navbar default collapseOnSelect>
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
            <NavItem eventKey={3} componentClass={Link} href="/ip" to="/ip">
              International Press
            </NavItem>
            <NavItem eventKey={4} componentClass={Link} href="/" to="/">
              Applications
            </NavItem>
            <NavItem eventKey={5} componentClass={Link} href="/sec" to="/sec">
              The Secretariat
            </NavItem>
            <NavItem eventKey={6} componentClass={Link} href="/" to="/">
              Sponsors
            </NavItem>
            <NavItem eventKey={7} componentClass={Link} href="/" to="/">
              Contact Us
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </View>
    )
  }
}