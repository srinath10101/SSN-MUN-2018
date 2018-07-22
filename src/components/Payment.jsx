import React, { Component } from 'react' 
import { Image , Grid} from 'react-bootstrap';
import {View, ImageBackground} from 'react-native';
import WhenInView from './WhenInView/WhenInView';
import RevealP from 'react-reveal';
import './Home.css';
import ScrollUpButton from 'react-scroll-up-button';

export default class Payment extends Component{

    render() {
        return (
            <View>
                <ImageBackground id="idkwhy2"
              resizeMode= "repeat"
              source = {{uri: 'images/hd2flipped.jpg'}}
            position="relative"
            style={{width: '100%',marginTop:"-2em", position:'relative'}} >
                <Grid>
                <div className="col-lg-12 col-xs-12" style={{textAlign:"center", marginTop:"10em", marginBottom: "10em"}}><br></br><h3><b>The payment portal will open after delegates have been assigned committees and contries.<br></br> Please check again later.</b></h3></div>
                </Grid>
                </ImageBackground>
                <View
      style={{
        borderBottomColor: 'grey',
        borderBottomWidth: 3,
      }}
    />
          <div style={{backgroundColor: "#bfbab9", color:"black", textAlign: "center", fontSize: "15px" }}><b>Made with:</b>
          <br></br>
          <Image src="./images/reactimg.png" style={{position: "relative", width: "60px", height: "60px"}}/>
              <b>and</b> {/*<Image src="images/addimg.png" style={{position: "relative", width: "50px", height: "50px"}}/>*/}
          <Image src="images/heartimg.png" style={{position: "relative", width: "40px", height: "40px"}}/>
          <br></br>
    </div>
            </View>
        )
    }

}