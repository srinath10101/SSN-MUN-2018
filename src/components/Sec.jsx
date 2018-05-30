import React, { Component } from 'react' 
import { Image ,Grid } from 'react-bootstrap';
import {View} from 'react-native';
import WhenInView from './WhenInView/WhenInView';
import RevealP from 'react-reveal';
import './Sec.css';


export default class Home extends Component {
  render() {
        return (
            <Grid id="whole">
            <WhenInView>
                    { ( isInView ) => 
                        <RevealP hide={!isInView}>
                             <Image src="images/anand.jpg" className="secpic"/>
                        </RevealP>
                    }
                </WhenInView>
            <br></br><br></br>
                <WhenInView>
                    { ( isInView ) => 
                        <RevealP hide={!isInView}>
                             <Image src="images/gana.jpg" className="secpic"/>
                        </RevealP>
                    }
                </WhenInView>
                <br></br><br></br><br></br> 
                <WhenInView>
                    { ( isInView ) => 
                        <RevealP hide={!isInView}>
                             <Image src="images/navneeth.jpg" className="secpic"/>
                        </RevealP>
                    }
                </WhenInView>
                <br></br><br></br><br></br> 
                <WhenInView>
                    { ( isInView ) => 
                        <RevealP hide={!isInView}>
                             <Image src="images/meena.jpg" className="secpic"/>
                        </RevealP>
                    }
                </WhenInView>
                <br></br><br></br><br></br> 
                <WhenInView>
                    { ( isInView ) => 
                        <RevealP hide={!isInView}>
                             <Image src="images/tejas.jpg" className="secpic"/>
                        </RevealP>
                    }
                </WhenInView>
                <br></br><br></br><br></br> 
                <WhenInView>
                    { ( isInView ) => 
                        <RevealP hide={!isInView}>
                             <Image src="images/bharath.jpg" className="secpic"/>
                        </RevealP>
                    }
                </WhenInView>
                <br></br><br></br><br></br> 
            </Grid>
        )
    }
}