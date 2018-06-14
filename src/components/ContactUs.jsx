import React, { Component } from 'react' 
import {View} from 'react-native';
import WhenInView from './WhenInView/WhenInView';
import RevealP from 'react-reveal';
import './ContactUs.css';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import ScrollUpButton from 'react-scroll-up-button';

export default class ContactUs extends Component {
  render() {
        return (
            <Grid id="whole">
            <ScrollUpButton />
            <Jumbotron>
            <Image src="images/logo.jpg" className="header-image" />
                </Jumbotron>
                <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="images/anand.jpg" circle className="profile-pic"/>
            <h3>Anand Subramaniam</h3>
            <p>123456789</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="images/gana.jpg" circle className="profile-pic"/>
            <h3>Ganapathi Ramnathan</h3>
            <p>123456789</p>
          </Col>
        </Row>
            </Grid>
        )
    }
}