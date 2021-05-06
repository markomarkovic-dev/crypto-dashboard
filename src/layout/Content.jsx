import React, { Component } from 'react';
import LoupeIcon from '../assets/icons/loupe.svg';
import XIcon from '../assets/icons/letter-x.svg';

export class Body extends Component {
    render() {
        return (
            <div className="content">
                <div className="content-header">
                    <div className="dash-name">
                        <h1>Dashboard</h1>
                        <span>10:00</span>
                        <span> • </span>
                        <span>30 May 2021</span>
                    </div>
                    <div className="dash-search">
                        <input type="search" placeholder="Search..."/>
                        <span className="typed"><img src={XIcon} alt="" /></span>
                        <span className="not-typed"><img src={LoupeIcon} alt="" /></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body
