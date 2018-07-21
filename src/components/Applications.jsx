import React, { Component } from 'react' 
import { Image, Grid ,Row} from 'react-bootstrap';
import {ScrollView, View, Text, ImageBackground} from 'react-native';
import './Applications.css';
import WhenInView from './WhenInView/WhenInView';
import RevealP from 'react-reveal';
import ScrollUpButton from 'react-scroll-up-button';

export default class Applications extends Component {
    
    gotoapply(){
      var cars = ["https://docs.google.com/forms/d/1RjSZ_7p-x4qhewtT3-HOeAxUu2lyeIFWapWh-1samg8/edit"];
      window.location = cars[0];
    }

    render() {
      return (
        <View>
          <ImageBackground id="idkwhy2"
              resizeMode= "repeat"
              source = {{uri: 'images/hd2flip.jpg'}}
            position="relative"
            style={{width: '100%',marginTop:"-0.3em", position:'relative'}} >
          <Grid >
          <br></br><br></br><br></br>
            <div className="col-lg-12" style={{textAlign: "center"}}><h3><b>Delegate applications have been opened!</b><br></br><br></br>
            <Image style={{position: "relative", cursor: "pointer", width: "200px"}} src="/images/apply.png" onClick={ () => this.gotoapply()}/>
            </h3><br></br><br></br></div>
            
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