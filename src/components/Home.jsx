import React, { Component } from 'react';
import { Image , Grid} from 'react-bootstrap';
import {View, ImageBackground, Text} from 'react-native';
import WhenInView from './WhenInView/WhenInView';
import RevealP from 'react-reveal';
import './Home.css';
import ScrollUpButton from 'react-scroll-up-button';

export default class Home extends Component {
  render() {
    return (
      <View>
      <ImageBackground id="idkwhy2"
        resizeMode = "repeat"
        source={{uri: 'images/backmap.jpg'}}
        style={{width: '100%', height: '100%', marginTop:"-1em", opacity: 0.9}} >
              <div class="section" style={{height:"100%", width: "100%"}}>
        <Image id="mainlogo" src="images/logo.jpg" id="mainlogo" className="header-image" style={ {position: "relative", height: "100%", width: "100%", marginTop: "0.25em"} } /> 
        </div>
      <ScrollUpButton/>
            <ScrollUpButton />
                      <div><br></br><br></br></div>
                <Grid id="whole">
                <div className="col-lg-12" style={{border: "thick solid blue", backgroundColor: "black"}}><h3 style={{color: "white"}}>Letter from the Secretary General</h3><p style={{color: "white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.         <br></br>
 </p></div>
            </Grid>
            <div><br></br><br></br></div>
            </ImageBackground>
            </View>
    )
  }
}

           