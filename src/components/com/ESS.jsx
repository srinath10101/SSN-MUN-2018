import React, { Component } from 'react';
import {View, ImageBackground, Text} from 'react-native';
import { Image,Grid } from 'react-bootstrap';
//import './DISEC.css';
import ScrollUpButton from 'react-scroll-up-button';

export default class ess extends Component {

    constructor(props) {
        super(props);
        this.state = { 
         checking:false
      };
        this.setbgimg = this.setbgimg.bind(this);
    }

    setbgimg(){
        var screenWidth = window.innerWidth;
        if( screenWidth < 768 ){
            /*

                ------------------------MOBILE VERSION-----------------

            */
            // NOT LOADING IMAGE BACKGROUND
            return (
                <View style={{marginTop:"3em"}}>
                <ScrollUpButton />
                <div><br></br></div>
                <Grid>
                <div className="col-lg-6 col-lg-offset-3 col-xs-12"><h2 style={{color: "black", textAlign:"center"}}><b><br></br><br></br>Emergency Special Session</b></h2></div>
                
                <div className="col-xs-1 col-lg-12"><br></br><br></br></div>

                <div style={{border: "thick solid blue"}}>
                <div className="col-lg-12 col-xs-12" style={{border: "thick solid blue", backgroundColor: "black"}}>
                <p style={{color: "white"}}><br></br>
                "If man does find the solution for world peace it will be the most revolutionary reversal of his record we have ever known."<br></br>
-George Marshall.<br></br><br></br>

Next up the 5th conference to be simulated at SSN MUN 2018, The Emergency Special Session or the ESS.<br></br>
An Emergency Special Session is an unscheduled meeting of the United Nations General Assembly to make urgent recommendations on a particular issue. They are typically rare—a fact reflected in there being only 10 in the history of the United Nations.<br></br><br></br>

The ESS convenes if the Security Council, because of lack of unanimity of the permanent members, fails to exercise its primary responsibility for the maintenance of international peace and security in any case where there appears to be a threat to the peace, breach of the peace, or act of aggression which prompts the General Assembly to consider the matter immediately with a view to making appropriate recommendations to Members for collective measures, including in the case of a breach of the peace or act of aggression the use of armed force when necessary, to maintain or restore international peace and security.<br></br>
                </p>
                <br></br></div>
                </div>

                <div style={{border: "thick solid blue"}}>
                <div className="col-lg-12 col-xs-1"><br></br><br></br></div>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid blue", backgroundColor: "black"}}><h4 style={{color: "white", textAlign:"center"}}>Director</h4><Image src="../images/ess/1.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}}><br></br>Tejas Bagri</p> <br></br></div>
                </div>
                <div className="col-xs-1"><br></br><br></br></div>
                <div style={{border: "thick solid blue"}}>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid blue", backgroundColor: "black"}}><h4 style={{color: "white", textAlign:"center"}}>Chair-person</h4><Image src="../images/ess/2.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}}><br></br>Vaibhav K N</p><br></br></div>
                </div>
                <div className="col-xs-1"><br></br><br></br></div>

                <div style={{border: "thick solid blue"}}>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid blue", backgroundColor: "black"}}><h4 style={{color: "white", textAlign:"center"}}>Vice Chair-person</h4><Image src="../images/ess/3.jpeg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}}><br></br>Dayanidhi Krishna</p><br></br></div>
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
            );
        }




        /*

                ------------------------DESKTOP VERSION-----------------

        */


    else{
            // LOADING IMAGE BACKGROUND
            return (
                <View>
                <ImageBackground id="idkwhy2"
        resizeMode = "repeat"
        source={{uri: '../images/com/ESS.png'}}
        style={{width: '100%', height: '100%', opacity: 0.9, marginTop: "3em"}} >
                <ScrollUpButton />
                <div><br></br></div>
                <Grid>
                <div className="col-lg-6 col-lg-offset-3 col-xs-12"><h2 style={{color: "white", textAlign:"center"}}><b>Emergency Special Session</b></h2></div>
                <div className="col-lg-12 col-xs-12"><br></br><br></br></div>
                <div style={{border: "thick solid blue"}}>
                <div className="col-lg-6 col-lg-offset-3 col-xs-12" style={{border: "thick solid blue", backgroundColor: "black"}}>
                <h3 style={{color:"white",textAlign:"center"}}>AGENDA:</h3>
                <p style={{color: "white", textAlign: "center", fontSize:"20px"}}>
                    "The Suez Crisis"
                </p>
                <br></br></div>
                </div>
                <div className="col-xs-1 col-lg-12"><br></br><br></br></div>

                <div style={{border: "thick solid blue"}}>
                <div className="col-lg-12 col-xs-12" style={{border: "thick solid blue", backgroundColor: "black"}}>
                <p style={{color: "white"}}><br></br>
                "If man does find the solution for world peace it will be the most revolutionary reversal of his record we have ever known."<br></br>
-George Marshall.<br></br><br></br>

Next up the 5th conference to be simulated at SSN MUN 2018, The Emergency Special Session or the ESS.<br></br>
An Emergency Special Session is an unscheduled meeting of the United Nations General Assembly to make urgent recommendations on a particular issue. They are typically rare—a fact reflected in there being only 10 in the history of the United Nations.<br></br><br></br>

The ESS convenes if the Security Council, because of lack of unanimity of the permanent members, fails to exercise its primary responsibility for the maintenance of international peace and security in any case where there appears to be a threat to the peace, breach of the peace, or act of aggression which prompts the General Assembly to consider the matter immediately with a view to making appropriate recommendations to Members for collective measures, including in the case of a breach of the peace or act of aggression the use of armed force when necessary, to maintain or restore international peace and security.<br></br>
                </p>
                <br></br></div>
                </div>

                <div style={{border: "thick solid blue"}}>
                <div className="col-lg-12 col-xs-1"><br></br><br></br></div>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid blue", backgroundColor: "black"}}><h4 style={{color: "white", textAlign:"center"}}>Director</h4><Image src="../images/ess/1.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}}><br></br>Tejas Bagri</p> <br></br></div>
                </div>
                <div className="col-xs-1"><br></br><br></br></div>
                <div style={{border: "thick solid blue"}}>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid blue", backgroundColor: "black"}}><h4 style={{color: "white", textAlign:"center"}}>Chair-person</h4><Image src="../images/ess/2.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}}><br></br>Vaibhav K N</p><br></br></div>
                </div>
                <div className="col-xs-1"><br></br><br></br></div>

                <div style={{border: "thick solid blue"}}>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid blue", backgroundColor: "black"}}><h4 style={{color: "white", textAlign:"center"}}>Vice Chair-person</h4><Image src="../images/ess/3.jpeg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}}><br></br>Dayanidhi Krishna</p><br></br></div>
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
            );
        }
    }

    render(){
        return (
            <View>{this.setbgimg()}</View>
                /*<ImageBackground id="idkwhy2"
        resizeMode = "repeat"
        source={{uri: '../images/backmap.jpg'}}
        style={{width: '100%', height: '100%', opacity: 0.9, marginTop: "3em"}} >
                <ScrollUpButton />
                <div><br></br></div>
                <Grid>
                <div className="col-lg-6 col-lg-offset-3 col-xs-12" style={{backgroundColor: "black", border: "thick solid white"}}><h3 style={{color: "red", textAlign:"center"}}>Emergency Special Session</h3></div>
                <div className="col-lg-12 col-xs-12"><br></br><br></br></div>
                <div style={{border: "thick solid blue"}}>
                <div className="col-lg-6 col-lg-offset-3 col-xs-12" style={{border: "thick solid blue", backgroundColor: "black"}}>
                <h3 style={{color:"white",textAlign:"center"}}>AGENDA:</h3>
                <p style={{color: "white", textAlign: "center", fontSize:"20px"}}>
                    "The Suez Crisis"
                </p>
                <br></br></div>
                </div>
                <div className="col-xs-1 col-lg-12"><br></br><br></br></div>

                <div style={{border: "thick solid blue"}}>
                <div className="col-lg-12 col-xs-12" style={{border: "thick solid blue", backgroundColor: "black"}}>
                <p style={{color: "white"}}><br></br>
                "If man does find the solution for world peace it will be the most revolutionary reversal of his record we have ever known."<br></br>
-George Marshall.<br></br><br></br>

Next up the 5th conference to be simulated at SSN MUN 2018, The Emergency Special Session or the ESS.<br></br>
An Emergency Special Session is an unscheduled meeting of the United Nations General Assembly to make urgent recommendations on a particular issue. They are typically rare—a fact reflected in there being only 10 in the history of the United Nations.<br></br><br></br>

The ESS convenes if the Security Council, because of lack of unanimity of the permanent members, fails to exercise its primary responsibility for the maintenance of international peace and security in any case where there appears to be a threat to the peace, breach of the peace, or act of aggression which prompts the General Assembly to consider the matter immediately with a view to making appropriate recommendations to Members for collective measures, including in the case of a breach of the peace or act of aggression the use of armed force when necessary, to maintain or restore international peace and security.<br></br>
                </p>
                <br></br></div>
                </div>

                <div style={{border: "thick solid blue"}}>
                <div className="col-lg-12 col-xs-1"><br></br><br></br></div>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid blue", backgroundColor: "black"}}><h4 style={{color: "white", textAlign:"center"}}>Director</h4><Image src="../images/ess/1.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}}><br></br>Tejas Bagri</p> <br></br></div>
                </div>
                <div className="col-xs-1"><br></br><br></br></div>
                <div style={{border: "thick solid blue"}}>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid blue", backgroundColor: "black"}}><h4 style={{color: "white", textAlign:"center"}}>Chair-person</h4><Image src="../images/ess/2.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}}><br></br>Vaibhav K N</p><br></br></div>
                </div>
                <div className="col-xs-1"><br></br><br></br></div>

                <div style={{border: "thick solid blue"}}>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid blue", backgroundColor: "black"}}><h4 style={{color: "white", textAlign:"center"}}>Vice Chair-person</h4><Image src="../images/ess/3.jpeg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}}><br></br>Dayanidhi Krishna</p><br></br></div>
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
      </div> */
        )
    }
}