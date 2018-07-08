import React, { Component } from 'react' 
import { Image } from 'react-bootstrap';
import {View} from 'react-native';
import WhenInView from './WhenInView/WhenInView';
import RevealP from 'react-reveal';
import './Home.css';
import ScrollUpButton from 'react-scroll-up-button';

export default class Payment extends Component{

    render() {
        return (
            <View>
                <p>The payment portal will open after delegates have been assigned committees and contries.</p>
            </View>
        )
    }

}