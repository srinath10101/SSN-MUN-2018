import React, { Component } from 'react' 
import {View, ImageBackground} from 'react-native';
import WhenInView from './WhenInView/WhenInView';
import RevealP from 'react-reveal';
import './ContactUs.css';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import ScrollUpButton from 'react-scroll-up-button';

export default class ContactUs extends Component {
  render() {
        return (
          <View>
      <ImageBackground id="idkwhy2"
        resizeMode = "repeat"
        source={{uri: 'images/backmap.jpg'}}
        style={{width: '100%', height: '100%', marginTop:"-1em", opacity: 0.9}} >
              <div class="section" style={{height:"100%", width: "100%"}}>
                      <div><br></br><br></br></div>
        </div>
        <ScrollUpButton />
            <Grid id="whole" style={{color : "white"}}>
            <div className="col-lg-3" style={{border: "thick solid white", backgroundColor: "black"}}><p style={{color: "white"}}>
            <h3 style={{color: "blue"}}>Secretary General </h3> Anand Subramanian <br></br>(+91 94450 99746) </p>
            </div>
            <div className="col-lg-1"><br></br></div>
            <div className="col-lg-4" style={{border: "thick solid white", backgroundColor: "black"}}><p style={{color: "white"}}>
            <h3 style={{color: "blue"}}>Deputy Secretary General </h3> Ganapathi Ramanathan <br></br>(+91 90031 34586) </p>
            </div>
            </Grid>
        <div><br></br><br></br></div>
        </ImageBackground>
        <div style={{backgroundColor: "black" }}><br></br><br></br><br></br></div>
      <View
  style={{
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  }}
/>
      <div style={{backgroundColor: "black", color:"white", textAlign: "center", fontSize: "25px" }}><br></br>Made with:
      <br></br>
      <Image src="./images/reactimg.png" style={{position: "relative", width: "70px", height: "70px"}}/>
      <Image src="images/addimg.png" style={{position: "relative", width: "30px", height: "30px"}}/>
      <Image src="images/heartimg.png" style={{position: "relative", width: "50px", height: "50px"}}/>
      </div>
        </View>
        )
    }
}