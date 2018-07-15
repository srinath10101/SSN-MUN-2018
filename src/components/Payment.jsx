import React, { Component } from 'react' 
import { Image } from 'react-bootstrap';
import {View} from 'react-native';
import WhenInView from './WhenInView/WhenInView';
import RevealP from 'react-reveal';
import './Home.css';
import ScrollUpButton from 'react-scroll-up-button';

export default class Payment extends Component{

    render() {
        return (
            <View>
                <div style={{textAlign:"center", height: "100px"}}><br></br><p>The payment portal will open after delegates have been assigned committees and contries. Check again later.</p>
                </div>
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