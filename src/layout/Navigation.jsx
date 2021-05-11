import React, { Component } from 'react';
import LogoImg from '../assets/images/logo.svg';
import HouseIcon from '../assets/icons/011-house.svg';
import ImageIcon from '../assets/icons/005-image.svg';
import SettingsIcon from '../assets/icons/025-settings.svg';
import NewsIcon from '../assets/icons/013-news.svg';
import StockIcon from '../assets/icons/016-stock exchange app.svg';
import ManIcon from '../assets/icons/man.svg';


export class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <div className="nav-top">
                    <div className="logo-container">
                        <img src={LogoImg} alt=""/>
                    </div>
                    <a href="#" className="nav-link">
                        <img src={HouseIcon} className="nav-icon" alt=""/>
                    </a>
                    <a href="#" className="nav-link">
                        <img src={ImageIcon} className="nav-icon" alt=""/>
                    </a>
                    <a href="#" className="nav-link">
                        <img src={NewsIcon} className="nav-icon" alt=""/>
                    </a>
                    <a href="#" className="nav-link">
                        <img src={StockIcon} className="nav-icon" alt=""/>
                    </a>
                </div>
                <div className="nav-bot">
                     <a href="#" className="nav-link">
                        <img src={SettingsIcon} className="nav-icon" alt=""/>
                    </a>
                    <a href="#" className="nav-link mobile-nav">
                        <img src={ManIcon} className="nav-icon" alt=""/>
                    </a>
                </div>
            </div>
        )
    }
}

export default Navigation
