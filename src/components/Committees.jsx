import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './Committees.css';

export default class committees extends Component {
    render(){
        return (
            <div>
                <Image src="images/logo.jpg" className="header-image" />
            </div>
        )
    }
}