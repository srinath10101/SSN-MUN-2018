import React, { Component } from 'react';
import { Image , Grid} from 'react-bootstrap';
import {View, ImageBackground, Text, WebView} from 'react-native';
import WhenInView from './WhenInView/WhenInView';
import RevealP from 'react-reveal';
import './Home.css';
import ScrollUpButton from 'react-scroll-up-button';


export default class Home extends Component {
         
  render() {   
        return (

        <View>
            <ImageBackground id="idkwhy2"
        resizeMode = "cover"
        source={{uri: 'images/backmap322.jpg'}}
        style={{width: '100%', height: '100%', marginTop:"-0.3em"}} >
              
        <Image id="mainlogo" src="images/logo.jpg" id="mainlogo" className="header-image" style={ {position: "relative", height: "100%", width: "100%", marginTop: "0.25em"} } /> 
        <View
  style={{
    borderBottomColor: 'grey',
    borderBottomWidth: 3,
  }}
/>
      <ScrollUpButton/>
                <div><br></br><br></br></div>      
                <Grid id="whole">
                
                <div className="col-lg-12" style={{border: "thin solid black", background: "url('images/backmap322flip.jpg')"}}><h3 style={{color: "black"}}>Letter from the Secretary General</h3><p style={{color: "black"}}>
                <br></br>
                Ladies and Gentlemen,
<br></br><br></br>
On behalf of the entire Organizing Committee, it gives me great pleasure to welcome you to SSN Model United Nations, 2018.<br></br>
<br></br>
Ever since its inception in 2014, SSNMUN has been renown for the standards that it has established in the MUN circuit in terms of the quality of the participation of delegates and the Executive Board members who have been a part of our conference. This conference has always sought to build upon and surpass  the foundations and standards that we have established with each subsequent edition and we’re confident this edition will be no different. <br></br>
<br></br>
This year, with a total of 6 committees, we look forward to hosting a conference of exceptional quality, and ensure that all attendees take away something of value, enriching all stakeholders in the process as well as making it a conference to remember.<br></br>
<br></br>
Henceforth, I cordially invite you to SSN MUN 2018, to experience three days of engaging debate and deliberation.
<br></br><br></br>
Yours Sincerely<br></br>
Anand Subramanian<br></br>
Secretary General<br></br>
SSN MUN 2018<br></br>
 </p></div>
            </Grid>
            <div><br></br><br></br></div>
            </ImageBackground>
      <View
  style={{
    borderBottomColor: 'grey',
    borderBottomWidth: 3,
  }}
/>
      <div style={{background: "url('images/backmap322flip.jpg')", color:"black", textAlign: "center", fontSize: "25px" }}><br></br>Made with:
      <br></br>
      <Image src="./images/reactimg.png" style={{position: "relative", width: "70px", height: "70px"}}/>
      <Image src="images/addimg.png" style={{position: "relative", width: "30px", height: "30px"}}/>
      <Image src="images/heartimg.png" style={{position: "relative", width: "50px", height: "50px"}}/>
      <br></br><br></br>
</div>
</View>
    );
  }
}

           