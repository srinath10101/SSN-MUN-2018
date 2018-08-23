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
        //var screenWidth = window.innerWidth;
            window.location = "http://www.ssn.edu.in/apps/mun-payment-form/";
            return;
    }
    render() {
        return (
            
            <View>
            {this.setbgimg()}
                </View>
            
        )
    }

}