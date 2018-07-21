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
        position= "relative"
        source={{uri: 'images/hd2flip.jpg'}}
        style={{width: '100%', height: '100%', marginTop:"-1em", opacity: 0.9}} >
              <div class="section" style={{height:"100%", width: "100%", marginTop: "3em"}}>
                      <div><br></br><br></br></div>
        </div>
        <ScrollUpButton />
            <Grid id="whole">
            <div className="col-lg-3" style={{border: "thick solid black"}}><p style={{color: "black"}}>
            <h3 style={{color: "black"}}><b>Secretary General</b></h3> Anand Subramanian <br></br>(+91 94450 99746) </p>
            </div>
            <div className="col-lg-1"><br></br></div>
            <div className="col-lg-4" style={{border: "thick solid black"}}><p style={{color: "black"}}>
            <h3 style={{color: "black"}}><b>Deputy Secretary General</b></h3> Ganapathi Ramanathan <br></br>(+91 90031 34586) </p>
            </div>
            </Grid>
        <div><br></br><br></br><br></br></div>
        </ImageBackground>
        <View
    style={{
      borderBottomColor: 'grey',
      borderBottomWidth: 3,
    }}
  />
        <div style={{backgroundColor: "#cccccc", color:"black", textAlign: "center", fontSize: "15px" }}><b>Made with:</b>
        <br></br>
        <Image src="./images/reactimg.png" style={{position: "relative", width: "60px", height: "60px"}}/>
              <b>and</b> {/*<Image src="images/addimg.png" style={{position: "relative", width: "50px", height: "50px"}}/>*/}
        <Image src="images/heartimg.png" style={{position: "relative", width: "45px", height: "45px"}}/>
        <br></br>
  </div>
        </View>
        )
    }
}