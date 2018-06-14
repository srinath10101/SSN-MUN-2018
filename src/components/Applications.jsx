import React, { Component } from 'react' 
import { Image, Grid ,Row} from 'react-bootstrap';
import {ScrollView, View, Text} from 'react-native';
import './Applications.css';
import WhenInView from './WhenInView/WhenInView';
import RevealP from 'react-reveal';
import ScrollUpButton from 'react-scroll-up-button';

export default class Applications extends Component {
    render() {
      return (
        <View id="contai">
        <ScrollUpButton />
        <Image src="images/logo.jpg" className="header-image" />
        <div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br> </div>
        
          <WhenInView>
            { ( isInView ) => 
            
            <RevealP hide={!isInView}>
            <div id="content"><p id="head"><h2>Applications:</h2>
            Please wait for the Applications to be released!<br></br>
            </p>
            </div>
            </RevealP>

            }
        </WhenInView>
        
      </View>
      )
    }
}