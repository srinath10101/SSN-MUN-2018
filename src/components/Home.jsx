import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
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
        style={{width: '100%', height: '100%', opacity: 0.9}} >
        <Image src="images/logo.jpg" className="header-image" style={ {position: "relative"} } />
      <ScrollUpButton></ScrollUpButton>
      <WhenInView>
            { ( isInView ) => 
            
            <RevealP hide={!isInView}>
            <div id="content"><p id="head"><h2>Letter from The Secretary General:</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.         <br></br>
            </p>
            </div>
            </RevealP>

            }
        </WhenInView>        
        
      </ImageBackground>
      </View>
    )
  }
}