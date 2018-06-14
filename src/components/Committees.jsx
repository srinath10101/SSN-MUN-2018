import React, { Component } from 'react';
import { Image,Grid } from 'react-bootstrap';
import './Committees.css';
import ScrollUpButton from 'react-scroll-up-button';
import WhenInView from './WhenInView/WhenInView';
import RevealP from 'react-reveal';

export default class committees extends Component {
    render(){
        return (
            <div>
                <Image src="images/logo.jpg" className="header-image" />
                <Grid id="whole">
            <WhenInView>
                    { ( isInView ) => 
                        <RevealP hide={!isInView}>

                            <div id="content"><p id="head"><h2>United Nations Security Council</h2>
                             <Image src="images/UNSC.jpg" className="secpic"/>
                             </p> </div>
                        </RevealP>
                    }
                </WhenInView>
            <br></br><br></br>
                <WhenInView>
                    { ( isInView ) => 
                        <RevealP hide={!isInView}>
                            <div id="content"><p id="head"><h2>Disarmament and International Security</h2>
                             <Image src="images/DISEC.jpg" className="secpic"/>
                             </p> </div>
                        </RevealP>
                    }
                </WhenInView>
                <br></br><br></br><br></br> 
                <WhenInView>
                    { ( isInView ) => 
                        <RevealP hide={!isInView}>
                            <div id="content"><p id="head"><h2>Human Rights Committee</h2>
                             <Image src="images/UNHRC.jpg" className="secpic"/>
                             </p> </div>
                        </RevealP>
                    }
                </WhenInView>
                <br></br><br></br><br></br> 
                <WhenInView>
                    { ( isInView ) => 
                        <RevealP hide={!isInView}>
                            <div id="content"><p id="head"><h2>Munich Security Council</h2>
                             <Image src="images/MSC.jpg" className="secpic"/>
                             </p> </div>
                        </RevealP>
                    }
                </WhenInView>
                <br></br><br></br><br></br> 
                <WhenInView>
                    { ( isInView ) => 
                        <RevealP hide={!isInView}>
                            <div id="content"><p id="head"><h2>Emergency Special Session</h2>
                             <Image src="images/ESS.jpg" className="secpic"/>
                             </p> </div>
                        </RevealP>
                    }
                </WhenInView>
                <br></br><br></br><br></br> 
                <ScrollUpButton />
            </Grid>
            </div>
        )
    }
}