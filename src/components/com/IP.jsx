import React, { Component } from 'react';
import {View, ImageBackground, Text} from 'react-native';
import { Image,Grid } from 'react-bootstrap';
//import './DISEC.css';
import ScrollUpButton from 'react-scroll-up-button';

export default class ip extends Component {
    render(){
        return (
            <View>
                <ImageBackground id="idkwhy2"
        resizeMode = "repeat"
        source={{uri: '../images/backmap.jpg'}}
        style={{width: '100%', height: '100%', opacity: 0.9, marginTop: "-1em"}} >
                <ScrollUpButton />
                <div><br></br></div>
                <Grid>
                <div className="col-lg-6 col-lg-offset-3 col-xs-12" style={{backgroundColor: "black", border: "thick solid white"}}><h3 style={{color: "red", textAlign:"center"}}>International Press</h3></div>
                <div className="col-lg-12 col-xs-12"><br></br><br></br></div>
                <div className="col-xs-1 col-lg-12"><br></br><br></br></div>

                <div style={{border: "thick solid blue"}}>
                <div className="col-lg-12 col-xs-12" style={{border: "thick solid blue", backgroundColor: "black"}}>
                <p style={{color: "white"}}><br></br>
                “I still believe that if your aim is to change the world,journalism is a more immediate short term weapon” <br></br>- Tom Stoppard<br></br><br></br>

Ladies and Gentlemen,<br></br><br></br>

Presenting to you, the final committee of SSN MUN 2018 - The International Press.<br></br><br></br>

The International Press is extremely vital in analyzing the direction that the council proceeds with, with its set of well-versed journalists/reporters, who act as both vital stakeholders in the proceedings of the council.<br></br><br></br>
They serve as an apt example of an instance when the pen is mightier than a sword and you can be rest assured that you will be held accountable for anything you say in committee.<br></br>
With their frequent interviews, opinion polling sessions and press conferences, they help bring accountability to the stances and statements taken up countries in a council .<br></br><br></br>
The IP also consists of photographers, a much needed aspect for its functioning, covering the moments in committee as discussion unfold, capturing the vital moments that define it. <br></br>
                </p>
                <br></br></div>
                </div>

                <div style={{border: "thick solid blue"}}>
                <div className="col-lg-12 col-xs-1"><br></br><br></br></div>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid blue", backgroundColor: "black"}}><h4 style={{color: "white", textAlign:"center"}}>Head of IP</h4><Image src="../images/ip/1.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}}><br></br>Keerthishree Raghu</p> <br></br></div>
                </div>
                <div className="col-xs-1"><br></br><br></br></div>
                <div style={{border: "thick solid blue"}}>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid blue", backgroundColor: "black"}}><h4 style={{color: "white", textAlign:"center"}}>Editor in Chief</h4><Image src="../images/ip/2.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}}><br></br>Tulica Bhattacharya</p><br></br></div>
                </div>
                <div className="col-xs-1"><br></br><br></br></div>

                <div style={{border: "thick solid blue"}}>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid blue", backgroundColor: "black"}}><h4 style={{color: "white", textAlign:"center"}}>Head of photography</h4><Image src="../images/ip/3.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}}><br></br>Keerthivasan</p><br></br></div>
                </div>
                <div className="col-lg-12 col-xs-1"><br></br><br></br></div>
                

                </Grid>                
                <div><br></br><br></br></div>

                </ImageBackground>
                <div style={{backgroundColor: "black" }}><br></br><br></br><br></br></div>
      <View
  style={{
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  }}
/>
      <div style={{backgroundColor: "black", color:"white", textAlign: "center", fontSize: "25px" }}><br></br>Made with:
      <br></br>
      <Image src="../images/reactimg.png" style={{position: "relative", width: "70px", height: "70px"}}/>
      <Image src="../images/addimg.png" style={{position: "relative", width: "30px", height: "30px"}}/>
      <Image src="../images/heartimg.png" style={{position: "relative", width: "50px", height: "50px"}}/>
      </div>
            </View>
        )
    }
}