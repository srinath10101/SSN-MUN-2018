import React, { Component } from 'react';
import {View, ImageBackground, Text} from 'react-native';
import { Image,Grid } from 'react-bootstrap';
//import './DISEC.css';
import ScrollUpButton from 'react-scroll-up-button';

export default class disec extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         checking:false
      };
        this.setbgimg = this.setbgimg.bind(this);
    }
    setbgimg()
    {
        var screenWidth = window.innerWidth;
      if( screenWidth < 768 ){

        // Load mobile image
        return (
            <View>
                <ScrollUpButton />
                <div><br></br></div>
                <Grid>
                <div className="col-lg-6 col-lg-offset-3 col-xs-12" style={{backgroundColor: "black", border: "thick solid white"}}><h3 style={{color: "red", textAlign:"center"}}>Disarmament and International Security Council</h3></div>
                <div className="col-lg-12 col-xs-12"><br></br><br></br></div>
                <div style={{border: "thick solid black"}}>
                <div className="col-lg-6 col-lg-offset-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "black"}}>
                <h3 style={{color:"white",textAlign:"center"}}>AGENDA:</h3>
                <p style={{color: "white", textAlign: "center", fontSize:"20px"}}>
                    "Tackling the growing threat of nuclear terrorism"
                </p>
                <br></br></div>
                </div>
                <div className="col-xs-1 col-lg-12"><br></br><br></br></div>

                <div style={{border: "thick solid black"}}>
                <div className="col-lg-12 col-xs-12" style={{border: "thick solid black", backgroundColor: "black"}}>
                <p style={{color: "white"}}><br></br>
                "War is a racket. It always has been... A few profit - and the many pay. But there is a way to stop it."<br></br>
-Smedley Butler<br></br><br></br>

Presenting to you the first committee of SSN MUN 2018 - The UNGA DISEC.<br></br><br></br>

The first committee of the General Assembly, the UNGA DISEC is concerned with disarmament, global threats to peace and other related international security questions. It considers all disarmament and international security matters within the scope of the Charter or relating to the powers and functions of any other organ of the United Nations.<br></br>
All 193 member states of the UN have equal voting rights in the DISEC.<br></br><br></br>

The UNGA DISEC is one of the six committees being simulated at SSN MUN this year.<br></br>
                </p>
                <br></br></div>
                </div>

                <div style={{border: "thick solid black"}}>
                <div className="col-lg-12 col-xs-1"><br></br><br></br></div>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "black"}}><h4 style={{color: "white", textAlign:"center"}}>Director</h4><Image src="../images/disec/1.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}}><br></br>Lohith Chiluka</p> <br></br></div>
                </div>
                <div className="col-xs-1"><br></br><br></br></div>
                <div style={{border: "thick solid black"}}>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "black"}}><h4 style={{color: "white", textAlign:"center"}}>Chair-person</h4><Image src="../images/disec/2.png" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}}><br></br>Krishnakumar R</p><br></br></div>
                </div>
                <div className="col-xs-1"><br></br><br></br></div>

                <div style={{border: "thick solid black"}}>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "black"}}><h4 style={{color: "white", textAlign:"center"}}>Chair-person</h4><Image src="../images/disec/3.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}}><br></br>Jaivignesh Jayakumar</p><br></br></div>
                </div>
                <div className="col-lg-12 col-xs-1"><br></br><br></br></div>
                

                </Grid>                
                <div><br></br><br></br></div>

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
      else{
        return (
            <View>
                <ImageBackground id="idkwhy2"
        resizeMode = "repeat"
        source={{uri: '../images/com/DISECbgm.png'}}
        style={{width: '100%', height: '100%', opacity: 0.9, marginTop: "3em"}} >
                <ScrollUpButton />
                <div><br></br></div>
                <Grid>
                <div className="col-lg-6 col-lg-offset-3 col-xs-12" style={{}}><h3 style={{color: "white", textAlign:"center"}}>Disarmament and International Security Council</h3></div>
                <div className="col-lg-12 col-xs-12"><br></br><br></br></div>
                <div style={{border: "thick solid black"}}>
                <div className="col-lg-6 col-lg-offset-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "black",background: "url('../images/com/DISECbgmFlip.png')"}}>
                <h3 style={{color:"white",textAlign:"center"}}>AGENDA:</h3>
                <p style={{color: "white", textAlign: "center", fontSize:"20px"}}>
                    "Tackling the growing threat of nuclear terrorism"
                </p>
                <br></br></div>
                </div>
                <div className="col-xs-1 col-lg-12"><br></br><br></br></div>

                <div style={{border: "thick solid black"}}>
                <div className="col-lg-12 col-xs-12" style={{border: "thick solid black", backgroundColor: "black",background: "url('../images/com/DISECbgmFlip.png')"}}>
                <p style={{color: "white"}}><br></br>
                "War is a racket. It always has been... A few profit - and the many pay. But there is a way to stop it."<br></br>
-Smedley Butler<br></br><br></br>

Presenting to you the first committee of SSN MUN 2018 - The UNGA DISEC.<br></br><br></br>

The first committee of the General Assembly, the UNGA DISEC is concerned with disarmament, global threats to peace and other related international security questions. It considers all disarmament and international security matters within the scope of the Charter or relating to the powers and functions of any other organ of the United Nations.<br></br>
All 193 member states of the UN have equal voting rights in the DISEC.<br></br><br></br>

The UNGA DISEC is one of the six committees being simulated at SSN MUN this year.<br></br>
                </p>
                <br></br></div>
                </div>

                <div style={{border: "thick solid black"}}>
                <div className="col-lg-12 col-xs-1"><br></br><br></br></div>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "black"}}><h4 style={{color: "white", textAlign:"center"}}>Director</h4><Image src="../images/disec/1.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}}><br></br>Lohith Chiluka</p> <br></br></div>
                </div>
                <div className="col-xs-1"><br></br><br></br></div>
                <div style={{border: "thick solid black"}}>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "black"}}><h4 style={{color: "white", textAlign:"center"}}>Chair-person</h4><Image src="../images/disec/2.png" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}}><br></br>Krishnakumar R</p><br></br></div>
                </div>
                <div className="col-xs-1"><br></br><br></br></div>

                <div style={{border: "thick solid black"}}>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "black"}}><h4 style={{color: "white", textAlign:"center"}}>Chair-person</h4><Image src="../images/disec/3.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
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
      <div style={{backgroundColor: "grey", color:"white", textAlign: "center", fontSize: "25px" }}><br></br>Made with:
      <br></br>
      <Image src="../images/reactimg.png" style={{position: "relative", width: "70px", height: "70px"}}/>
      <Image src="../images/addimg.png" style={{position: "relative", width: "30px", height: "30px"}}/>
      <Image src="../images/heartimg.png" style={{position: "relative", width: "50px", height: "50px"}}/>
      </div>
            </View>
        )

      }
    }
    render() {   
        return (
          <View>
            {this.setbgimg()}
          </View>
        );   
    }
}