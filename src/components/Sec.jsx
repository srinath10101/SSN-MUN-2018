import React, { Component } from 'react' 
import { Image ,Grid} from 'react-bootstrap';
import {View, ImageBackground} from 'react-native';
import WhenInView from './WhenInView/WhenInView';
import RevealP from 'react-reveal';
import './Sec.css';
import ScrollUpButton from 'react-scroll-up-button';

class Sec extends Component {

    setbgimg(){
        var screenwidth = window.screenwidth;
        if(screenwidth<768){



            return(
                <View>
            <ImageBackground id="idkwhy2"
        resizeMode = "repeat"
        source={{uri: 'images/hd2flip.jpg'}}
        style={{width: '100%', height: '100%', opacity: 0.9, marginTop: "-1em"}} >
            <Grid id="whole">
                <br></br><br></br>
                <div className="col-lg-12" style={{color: "black", textAlign: "center", fontSize: "20px", marginTop:"50%"}}><b>Meet The Team!</b><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></div>
                <div className="col-lg-12">
                             <div><Image src="images/anand.jpg" className="secpic"/></div>
                <br></br><br></br>
                </div>
                <div className="col-lg-12">
                        <div className="col-lg-12">
                        <div><Image src="images/gana.jpg" className="secpic"/></div><br></br><br></br><br></br><br></br></div>
                </div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-12" style={{textAlign:"center"}}><h3 style = {{color: "black"}}><b>DELEGATE AFFAIRS</b></h3></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/navneeth.jpg" className="secpic"/><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/meena.jpg" className="secpic"/><br></br><br></br><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-12" style={{textAlign:"center"}}><h3 style = {{color: "black"}}><b>FINANCE</b></h3></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6 col-lg-offset-3"> <Image src="images/tejas.jpg" className="secpic"/><br></br><br></br><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-12" style={{textAlign:"center"}}><h3 style = {{color: "black"}}><b>LOGISTICS</b></h3></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/bharath.jpg" className="secpic"/><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/harish.jpg" className="secpic"/><br></br><br></br><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-12" style={{textAlign:"center"}}><h3 style = {{color: "black"}}><b>HOSPITALITY</b></h3></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/shenoy.jpg" className="secpic"/><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/sushi.jpg" className="secpic"/><br></br><br></br><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                
                <div className="col-lg-12" style={{textAlign:"center"}}><h3 style = {{color: "black"}}><b>SPONSORSHIP</b></h3></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/RP.jpg" className="secpic"/><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/srini.jpg" className="secpic"/><br></br><br></br><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-12" style={{textAlign:"center"}}><h3 style = {{color: "black"}}><b>TECH AND DESIGN</b></h3></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/vishal.jpg" className="secpic"/><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/shreyas.jpg" className="secpic"/><br></br><br></br><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>

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
            <View
    style={{
      borderBottomColor: 'grey',
      borderBottomWidth: 3,
    }}
  />
        <div style={{backgroundColor: "#cccccc", color:"black", textAlign: "center", fontSize: "15px" }}><b>Made with:</b>
        <br></br>
        <Image src="./images/reactimg.png" style={{position: "relative", width: "60px", height: "60px"}}/>
              <b>and</b> {/*<Image src="images/addimg.png" style={{position: "relative", width: "50px", height: "50px"}}/>*/}
        <Image src="images/heartimg.png" style={{position: "relative", width: "45px", height: "45px"}}/>
        <br></br>
  </div>
            </View>
            );



        }
        else{

            
            return(
                <View>
            <ImageBackground id="idkwhy2"
        resizeMode = "repeat"
        source={{uri: 'images/hd2flipopred.jpg'}}
        style={{width: '100%', height: '100%',  marginTop: "-1em"}} >
            <Grid id="whole">
                <br></br><br></br>
                <div className="col-lg-12" style={{color: "black", textAlign: "center", fontSize: "20px", marginTop:"30%"}}><b>Meet The Team!</b><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></div>
                <div className="col-lg-6">
                             <div><Image src="images/anand.jpg" className="secpic"/></div>
                <br></br><br></br>
                </div>
                <div className="col-lg-6">
                        <div className="col-lg-12">
                        <div><Image src="images/gana.jpg" className="secpic"/></div><br></br></div>
                </div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-12" style={{textAlign:"center"}}><h3 style = {{color: "black"}}><b>DELEGATE AFFAIRS</b></h3></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/navneeth.jpg" className="secpic"/><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/meena.jpg" className="secpic"/><br></br><br></br><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-12" style={{textAlign:"center"}}><h3 style = {{color: "black"}}><b>FINANCE</b></h3></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6 col-lg-offset-3"> <Image src="images/tejas.jpg" className="secpic"/><br></br><br></br><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-12" style={{textAlign:"center"}}><h3 style = {{color: "black"}}><b>LOGISTICS</b></h3></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/bharath.jpg" className="secpic"/><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/harish.jpg" className="secpic"/><br></br><br></br><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-12" style={{textAlign:"center"}}><h3 style = {{color: "black"}}><b>HOSPITALITY</b></h3></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/shenoy.jpg" className="secpic"/><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/sushi.jpg" className="secpic"/><br></br><br></br><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                
                <div className="col-lg-12" style={{textAlign:"center"}}><h3 style = {{color: "black"}}><b>SPONSORSHIP</b></h3></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/RP.jpg" className="secpic"/><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/srini.jpg" className="secpic"/><br></br><br></br><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-12" style={{textAlign:"center"}}><h3 style = {{color: "black"}}><b>TECH AND DESIGN</b></h3></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/vishal.jpg" className="secpic"/><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/shreyas.jpg" className="secpic"/><br></br><br></br><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>

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
            <View
    style={{
      borderBottomColor: 'grey',
      borderBottomWidth: 3,
    }}
  />
        <div style={{backgroundColor: "#cccccc", color:"black", textAlign: "center", fontSize: "15px" }}><b>Made with:</b>
        <br></br>
        <Image src="./images/reactimg.png" style={{position: "relative", width: "60px", height: "60px"}}/>
              <b>and</b> {/*<Image src="images/addimg.png" style={{position: "relative", width: "50px", height: "50px"}}/>*/}
        <Image src="images/heartimg.png" style={{position: "relative", width: "45px", height: "45px"}}/>
        <br></br>
  </div>
            </View>
            );


        }
    }

  render() {
        return (
            <View>
                {this.setbgimg()}
            </View>
        )
    }
}

export default Sec;