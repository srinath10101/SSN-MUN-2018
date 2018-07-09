import React, { Component } from 'react';
import {View, ImageBackground} from 'react-native';
import { Image,Grid } from 'react-bootstrap';
import './Committees.css';
import ScrollUpButton from 'react-scroll-up-button';
import WhenInView from './WhenInView/WhenInView';
import RevealP from 'react-reveal';

export default class committees extends Component {
    render(){
        return (
            <View>
            <ImageBackground id="idkwhy2"
              resizeMode = "repeat"
              source={{uri: 'images/backmap.jpg'}}
              style={{width: '100%', height: '100%', opacity: 0.9}} >
                      <Image src="images/logo.jpg" className="header-image" style={ {position: "relative"} } />
                      <div><br></br><br></br><br></br><br></br></div>
                <Grid id="whole">
                <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12"><Image style={{position: "relative"}} src="images/UNSC.jpg" className="secpic"/></div>
                <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12"><Image style={{position: "relative"}} src="images/DISEC.jpg" className="secpic"/></div>
                <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12"><Image style={{position: "relative"}} src="images/UNHRC.jpg" className="secpic"/></div>
                <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12"><Image style={{position: "relative"}} src="images/MSC.jpg" className="secpic"/></div>
                <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12"><Image style={{position: "relative"}} src="images/ESS.jpg" className="secpic"/></div>
                <br></br><br></br><br></br> 
                <ScrollUpButton />
            </Grid>
            </ImageBackground>
            </View>
        )
    }
}