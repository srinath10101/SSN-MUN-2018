import React, { Component } from 'react' 
import { Image, Grid ,Row} from 'react-bootstrap';
import {ScrollView, View, Text} from 'react-native';
import './Sponsors.css';
import WhenInView from './WhenInView/WhenInView';
import RevealP from 'react-reveal';
import ScrollUpButton from 'react-scroll-up-button';

export default class Sponsors extends Component {
    render() {
      return (
        <View id="contai">
        <ScrollUpButton />
        <Image src="images/logo.jpg" className="header-image" />
        <div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br> </div>
        
          <WhenInView>
            { ( isInView ) => 
            
            <RevealP hide={!isInView}>
            <div id="content"><p id="head"><h2>Sponsors:</h2>
            Please wait for the Applications to be released!<br></br>
            </p>
            </div>
            </RevealP>

            }
        </WhenInView>
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