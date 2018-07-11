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
        style={{width: '100%', height: '100%', opacity: 0.9, marginTop: "-1em"}} >
            <Grid id="whole">
                <br></br><br></br>
                <div className="col-lg-12">
                             <div><Image src="images/anand.jpg" className="secpic"/></div>
                <br></br><br></br>
                </div>
                <div className="col-lg-12">
                             <div><Image src="images/gana.jpg" className="secpic"/></div>
                <br></br>
                </div>
                <div className="col-lg-12" style={{textAlign:"center"}}><h3 style = {{color: "white"}}>DELEGATE AFFAIRS</h3></div>
                <div className="col-lg-6"> <Image src="images/navneeth.jpg" className="secpic"/><br></br><br></br></div>
                <div className="col-lg-6"> <Image src="images/meena.jpg" className="secpic"/><br></br><br></br><br></br><br></br></div>
                <div className="col-lg-12" style={{textAlign:"center"}}><h3 style = {{color: "white"}}>FINANCE</h3></div>
                <div className="col-lg-6 col-lg-offset-3"> <Image src="images/tejas.jpg" className="secpic"/><br></br><br></br><br></br><br></br></div>
                <div className="col-lg-12" style={{textAlign:"center"}}><h3 style = {{color: "white"}}>LOGISTICS</h3></div>
                <div className="col-lg-6"> <Image src="images/bharath.jpg" className="secpic"/><br></br><br></br></div>
                <div className="col-lg-6"> <Image src="images/harish.jpg" className="secpic"/><br></br><br></br><br></br><br></br></div>
                
                <div className="col-lg-12" style={{textAlign:"center"}}><h3 style = {{color: "white"}}>HOSPITALITY</h3></div>
                <div className="col-lg-6"> <Image src="images/shenoy.jpg" className="secpic"/><br></br><br></br></div>
                <div className="col-lg-6"> <Image src="images/sushi.jpg" className="secpic"/><br></br><br></br><br></br><br></br></div>
                
                <div className="col-lg-12" style={{textAlign:"center"}}><h3 style = {{color: "white"}}>SPONSORSHIP</h3></div>
                <div className="col-lg-6"> <Image src="images/RP.jpg" className="secpic"/><br></br><br></br></div>
                <div className="col-lg-6"> <Image src="images/srini.jpg" className="secpic"/><br></br><br></br><br></br><br></br></div>

                
                <div className="col-lg-12" style={{textAlign:"center"}}><h3 style = {{color: "white"}}>TECH AND DESIGN</h3></div>
                <div className="col-lg-6"> <Image src="images/vishal.jpg" className="secpic"/><br></br><br></br></div>
                <div className="col-lg-6"> <Image src="images/shreyas.jpg" className="secpic"/><br></br><br></br><br></br><br></br></div>

                <div className="col-lg-3">
                <br></br><br></br></div>
                <div className="col-lg-3">
                <br></br><br></br></div>
                <div className="col-lg-6">
                             <div></div>
                <br></br><br></br>
                </div>
                <ScrollUpButton />
            </Grid>
            </ImageBackground>
        )
    }
}

export default Sec;