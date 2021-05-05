import React, { Component } from 'react';
import Navigation from './Navigation';
import Content from './Content';
import Aside from './Aside';

export class Layout extends Component {
    render() {
        return (
            <div className="dash-grid">
                <Navigation/>
                <Content/>
                <Aside/>
            </div>
        )
    }
}

export default Layout
