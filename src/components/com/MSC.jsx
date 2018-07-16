import React, { Component } from 'react';
import {View, ImageBackground, Text} from 'react-native';
import { Image,Grid } from 'react-bootstrap';
//import './DISEC.css';
import ScrollUpButton from 'react-scroll-up-button';

export default class msc extends Component {
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
                <div className="col-lg-6 col-lg-offset-3 col-xs-12" style={{backgroundColor: "black", border: "thick solid white"}}><h3 style={{color: "red", textAlign:"center"}}>Munich Security Conference</h3></div>
                <div className="col-lg-12 col-xs-12"><br></br><br></br></div>
                <div style={{border: "thick solid blue"}}>
                <div className="col-lg-6 col-lg-offset-3 col-xs-12" style={{border: "thick solid blue", backgroundColor: "black"}}>
                <h3 style={{color:"white",textAlign:"center"}}>AGENDA:</h3>
                <p style={{color: "white", textAlign: "center", fontSize:"20px"}}>
                    "The Bear and the Compass Rose : <br></br> Assessing the future of NATO-Russia relations and it's impact onn Global Security Strategy."
                </p>
                <br></br></div>
                </div>
                <div className="col-xs-1 col-lg-12"><br></br><br></br></div>

                <div style={{border: "thick solid blue"}}>
                <div className="col-lg-12 col-xs-12" style={{border: "thick solid blue", backgroundColor: "black"}}>
                <p style={{color: "white"}}><br></br>
                It brings me immense pride to introduce to you all the flagship committee of SSNMUN 2018: The Munich Security Conference.<br></br><br></br>

The Munich Security Conference is an annual conference on international security policy that has taken place in Munich, Bavaria since 1963. It is the world's largest gathering of its kind.<br></br><br></br>

Over the past four decades the Munich Security Conference has become the most important independent forum for the exchange of views by international security policy decision-makers. Each year it brings together about 350 senior figures from more than 70 countries around the world to engage in an intensive debate on current and future security challenges.<br></br><br></br>

The list of attendees includes Heads of States, Governments and International Organizations, Ministers, Members of Parliament, high-ranking representatives of Armed Forces, Science, Civil society as well as Business and Media.<br></br><br></br>

If you're someone who enjoys power, character simulation and deliberation slightly different from conventional committees, you know where to be this September!<br></br><br></br>

A Munich Security Report has said: 'The World is on the brink'.<br></br>
It's up to you to decide if that's true!<br></br>
                </p>
                <br></br></div>
                </div>

                <div style={{border: "thick solid blue"}}>
                <div className="col-lg-12 col-xs-1"><br></br><br></br></div>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid blue", backgroundColor: "black"}}><h4 style={{color: "white", textAlign:"center"}}>Director</h4><Image src="../images/msc/1.png" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}}><br></br>Shashank R</p> <br></br></div>
                </div>
                <div className="col-xs-1"><br></br><br></br></div>
                <div style={{border: "thick solid blue"}}>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid blue", backgroundColor: "black"}}><h4 style={{color: "white", textAlign:"center"}}>Chair-person</h4><Image src="../images/msc/2.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}}><br></br>Krishnakumar R</p><br></br></div>
                </div>
                <div className="col-xs-1"><br></br><br></br></div>

                <div style={{border: "thick solid blue"}}>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid blue", backgroundColor: "black"}}><h4 style={{color: "white", textAlign:"center"}}>Vice Chair-person</h4><Image src="../images/msc/3.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}}><br></br>Jaivignesh Jayakumar</p><br></br></div>
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