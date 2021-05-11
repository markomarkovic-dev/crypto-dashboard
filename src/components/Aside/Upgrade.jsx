import React, { Component } from 'react'
import UpgradeImg from '../../assets/icons/be-secure.svg';

export class Upgrade extends Component {
    render() {
        return (
            <div className="upgrade">
                <img src={UpgradeImg} alt="" />
                <button className="btn btn-upgrade">Upgrade Now!</button>
            </div>
        )
    }
}

export default Upgrade
