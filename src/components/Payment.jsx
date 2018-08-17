import React, {Component} from 'react' 
import { Image, Grid } from 'react-bootstrap';
import {View} from 'react-native';


export default class Payment extends Component{
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
      if( screenWidth<768){
            window.location = "http://www.ssn.edu.in/apps/mun-payment-form/";
            return;
      }
      else{
        var screenheight = window.innerHeight;
        screenheight = (screenheight) + "px";

            return(

                <View style={{backgroundColor: "grey", scrollX:"enabled"}}>
                <Grid>
                <View style={{width:"100%", height: screenheight}}><iframe src="http://www.ssn.edu.in/apps/mun-payment-form/" width="100%" height="100%" style={{marginTop: "3.5em"}} frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe></View>
                </Grid>
                <View
      style={{
        borderBottomColor: 'grey',
        borderBottomWidth: 3,
      }}
    />
          <div style={{backgroundColor: "#bfbab9", color:"black", textAlign: "center", fontSize: "15px" }}><b>Made with:</b>
          <br></br>
          <Image src="./images/reactimg.png" style={{position: "relative", width: "60px", height: "60px"}}/>
              <b>and</b> {/*<Image src="images/addimg.png" style={{position: "relative", width: "50px", height: "50px"}}/>*/}
          <Image src="images/heartimg.png" style={{position: "relative", width: "40px", height: "40px"}}/>
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