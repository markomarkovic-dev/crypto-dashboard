import React, { Component } from 'react';
import BellIcon from '../../assets/icons/bell.svg';
import ManIcon from '../../assets/icons/man.svg';

export class ProfileNotifications extends Component {
    render() {
        return (
            <div className="notif-profile">
                <div className="notifications notification-active">
                    <img src={BellIcon} alt="" />
                </div>
                <div className="profile">
                    <img src={ManIcon} alt="" />
                </div>
            </div>
        )
    }
}

export default ProfileNotifications
