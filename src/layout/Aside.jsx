import React, { Component } from 'react';
import RecentTransactions from '../components/Aside/RecentTransactions';
import ProfileNotifications from '../components/Aside/ProfileNotifications';
import Upgrade from '../components/Aside/Upgrade';


export class Aside extends Component {
    render() {
        return (
            <div className="aside">
                <ProfileNotifications/>
                <RecentTransactions/>
                <Upgrade/>
            </div>
        )
    }
}

export default Aside
