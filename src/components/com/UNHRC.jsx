import React, { Component } from 'react';
import {View, ImageBackground, Text} from 'react-native';
import { Image,Grid } from 'react-bootstrap';
//import './DISEC.css';
import ScrollUpButton from 'react-scroll-up-button';

export default class unhrc extends Component {
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
                <div className="col-lg-6 col-lg-offset-3 col-xs-12" style={{backgroundColor: "black", border: "thick solid white"}}><h3 style={{color: "red", textAlign:"center"}}>United Nations Human Rights Council</h3></div>
                <div className="col-lg-12 col-xs-12"><br></br><br></br></div>
                <div style={{border: "thick solid black"}}>
                <div className="col-lg-6 col-lg-offset-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "black"}}>
                <h3 style={{color:"white",textAlign:"center"}}>AGENDA:</h3>
                <p style={{color: "white", textAlign: "center", fontSize:"20px"}}>
                    "UNHRC Special Session :<br></br> Human Rights situation in occupied Palestinian territory, including east Jerusalem and the Syrian Golan."
                </p>
                <br></br></div>
                </div>
                <div className="col-xs-1 col-lg-12"><br></br><br></br></div>

                <div style={{border: "thick solid black"}}>
                <div className="col-lg-12 col-xs-12" style={{border: "thick solid black", backgroundColor: "black"}}>
                <p style={{color: "white"}}><br></br>
                
                “A right delayed is a right denied.”<br></br>-Martin Luther King Jr<br></br><br></br>

Ladies and Gentlemen, introducing the third council to be simulated at SSN MUN 2018: The United Nations Human Rights Council.<br></br><br></br>

The Human Rights Council is an inter-governmental body within the United Nations tasked with the responsibility of strengthening the promotion and protection of human rights around the globe whilst also addressing situations of human rights violations and make appropriate recommendations to address and rectify them. The Human Rights Council also works in tandem with the UN Special Procedures established by the former Commission on Human Rights and now assumed by the Council. These are made up of special rapporteurs, special representatives, independent experts and working groups that monitor, examine, advise and publicly report on thematic issues or human rights situations in specific.<br></br><br></br>

The UNHRC is one of the six councils being simulated at SSN MUN this year.<br></br>
                
                </p>
                <br></br></div>
                </div>

                <div style={{border: "thick solid black"}}>
                <div className="col-lg-12 col-xs-1"><br></br><br></br></div>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "black"}}><h4 style={{color: "white", textAlign:"center"}}>Director</h4><Image src="../images/unhrc/1.png" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}}><br></br>Ishita M</p> <br></br></div>
                </div>
                <div className="col-xs-1"><br></br><br></br></div>
                <div style={{border: "thick solid black"}}>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "black"}}><h4 style={{color: "white", textAlign:"center"}}>Chair-person</h4><Image src="../images/unhrc/2.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}}><br></br>Adiya Kumar</p><br></br></div>
                </div>
                <div className="col-xs-1"><br></br><br></br></div>

                <div style={{border: "thick solid black"}}>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "black"}}><h4 style={{color: "white", textAlign:"center"}}>Vice Chair-person</h4><Image src="../images/unhrc/3.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}}><br></br>Eassa Salim</p><br></br></div>
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
        source={{uri: '../images/com/HRCbgm.png'}}
        style={{width: '100%', height: '100%', opacity: 0.9, marginTop: "3em"}} >
                <ScrollUpButton />
                <div><br></br></div>
                <Grid>
                <div className="col-lg-6 col-lg-offset-3 col-xs-12" style={{}}><h3 style={{color: "white", textAlign:"center"}}>United Nations Human Rights Council</h3></div>
                <div className="col-lg-12 col-xs-12"><br></br><br></br></div>
                <div style={{border: "thick solid black"}}>
                <div className="col-lg-6 col-lg-offset-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "black",background: "url('../images/com/HRCbgmFlip.png')"}}>
                <h3 style={{color:"white",textAlign:"center"}}>AGENDA:</h3>
                <p style={{color: "white", textAlign: "center", fontSize:"20px"}}>
                    "UNHRC Special Session :<br></br> Human Rights situation in occupied Palestinian territory, including east Jerusalem and the Syrian Golan."
                </p>
                <br></br></div>
                </div>
                <div className="col-xs-1 col-lg-12"><br></br><br></br></div>

                <div style={{border: "thick solid black"}}>
                <div className="col-lg-12 col-xs-12" style={{border: "thick solid black", backgroundColor: "black",background: "url('../images/com/HRCbgmFlip.png')"}}>
                <p style={{color: "white"}}><br></br>
                
                “A right delayed is a right denied.”<br></br>-Martin Luther King Jr<br></br><br></br>

Ladies and Gentlemen, introducing the third council to be simulated at SSN MUN 2018: The United Nations Human Rights Council.<br></br><br></br>

The Human Rights Council is an inter-governmental body within the United Nations tasked with the responsibility of strengthening the promotion and protection of human rights around the globe whilst also addressing situations of human rights violations and make appropriate recommendations to address and rectify them. The Human Rights Council also works in tandem with the UN Special Procedures established by the former Commission on Human Rights and now assumed by the Council. These are made up of special rapporteurs, special representatives, independent experts and working groups that monitor, examine, advise and publicly report on thematic issues or human rights situations in specific.<br></br><br></br>

The UNHRC is one of the six councils being simulated at SSN MUN this year.<br></br>
                
                </p>
                <br></br></div>
                </div>

                <div style={{border: "thick solid black"}}>
                <div className="col-lg-12 col-xs-1"><br></br><br></br></div>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "black"}}><h4 style={{color: "white", textAlign:"center"}}>Director</h4><Image src="../images/unhrc/1.png" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}}><br></br>Ishita M</p> <br></br></div>
                </div>
                <div className="col-xs-1"><br></br><br></br></div>
                <div style={{border: "thick solid black"}}>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "black"}}><h4 style={{color: "white", textAlign:"center"}}>Chair-person</h4><Image src="../images/unhrc/2.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}}><br></br>Adiya Kumar</p><br></br></div>
                </div>
                <div className="col-xs-1"><br></br><br></br></div>

                <div style={{border: "thick solid black"}}>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "black"}}><h4 style={{color: "white", textAlign:"center"}}>Vice Chair-person</h4><Image src="../images/unhrc/3.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}}><br></br>Eassa Salim</p><br></br></div>
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