import React, { Component } from 'react' 
import { Image, Grid ,Row} from 'react-bootstrap';
import {ScrollView, View, Text} from 'react-native';

export default class Applications extends Component {
    render() {
      var cars = ["https://drive.google.com/drive/u/4/folders/1gSNPfBlGsw4IWIuEJuRFLcKYtGCrulR5"];
    window.location = cars[0];
      return (
        <View>
      </View>
      )
    }
}