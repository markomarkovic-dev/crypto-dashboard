import React, { Component } from 'react';
import RecentTransactions from '../components/Aside/RecentTransactions';
import ProfileNotifications from '../components/Aside/ProfileNotifications';


export class Aside extends Component {
    render() {
        return (
            <div className="aside">
                <ProfileNotifications/>
                <RecentTransactions/>
            </div>
        )
    }
}

export default Aside
