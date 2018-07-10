import React, { Component } from 'react' 
import { Image ,Grid} from 'react-bootstrap';
import {View, ImageBackground} from 'react-native';
import WhenInView from './WhenInView/WhenInView';
import RevealP from 'react-reveal';
import './Sec.css';
import ScrollUpButton from 'react-scroll-up-button';

class Sec extends Component {
  render() {
        return (
            <ImageBackground id="idkwhy2"
        resizeMode = "repeat"
        source={{uri: 'images/backmap.jpg'}}
        style={{width: '100%', height: '100%', opacity: 0.9}} >
            <Grid id="whole">
                <br></br><br></br>
                <div className="col-lg-6">
                <WhenInView>
                    { ( isInView ) => 
                        <RevealP hide={!isInView}>
                             <div><Image src="images/anand.jpg" className="secpic"/></div>
                        </RevealP>
                    }
                </WhenInView>
                <br></br><br></br>
                </div>
                <div className="col-lg-6">
                <WhenInView>
                    { ( isInView ) => 
                        <RevealP hide={!isInView}>
                             <div><Image src="images/gana.jpg" className="secpic"/></div>
                        </RevealP>
                    }
                </WhenInView>
                <br></br><br></br>
                </div>
                <div className="col-lg-6">
                <WhenInView>
                    { ( isInView ) => 
                        <RevealP hide={!isInView}>
                             <div><Image src="images/bharath.jpg" className="secpic"/></div>
                        </RevealP>
                    }
                </WhenInView>
                <br></br><br></br>
                </div>
                <div className="col-lg-6">
                <WhenInView>
                    { ( isInView ) => 
                        <RevealP hide={!isInView}>
                             <div><Image src="images/navneeth.jpg" className="secpic"/></div>
                        </RevealP>
                    }
                </WhenInView>
                <br></br><br></br>
                </div>
                <div className="col-lg-6">
                <WhenInView>
                    { ( isInView ) => 
                        <RevealP hide={!isInView}>
                             <div><Image src="images/tejas.jpg" className="secpic"/></div>
                        </RevealP>
                    }
                </WhenInView>
                <br></br><br></br>
                </div>
                <ScrollUpButton />
            </Grid>
            </ImageBackground>
        )
    }
}

export default Sec;