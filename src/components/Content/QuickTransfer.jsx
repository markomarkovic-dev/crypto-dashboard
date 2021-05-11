import React, { Component } from 'react'
import MenProfileIcon from '../../assets/icons/man.svg';
import GirlProfileIcon from '../../assets/icons/girl.svg';

export class QuickTransfer extends Component {
  render() {
    return (
      <div className="quick-transfer">
      <h3>Quick Transfer</h3>
      <div className="profiles">
        <div className="profile">
          <img src={MenProfileIcon} alt="" />
        </div>
        <div className="profile">
          <img src={GirlProfileIcon } alt="" />
        </div>
        <div className="add-profile">
            +
        </div>
      </div>
      <div className="transfer">
        <div className="transfer-label">Amount:</div>
        <div className="transfer-amount">126.5</div>
      </div>
      <button className="btn-transfer">
          Transfer now!
      </button>
    </div>
    )
  }
}

export default QuickTransfer
