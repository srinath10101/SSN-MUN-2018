import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './Committees.css';
import ScrollUpButton from 'react-scroll-up-button';


export default class committees extends Component {
    render(){
        return (
            <div>
                <ScrollUpButton />
                <Image src="images/logo.jpg" className="header-image" />
            </div>
        )
    }
}