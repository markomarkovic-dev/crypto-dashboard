import React, { Component } from 'react'
import arrowUpIcon from '../../assets/icons/profit-arrow-up.svg';
import ArrowDownIcon from '../../assets/icons/profit-arrow-down.svg';

export class Profit extends Component {
  render() {
    return (
      <div className="profit-container">
      <h3>Profit</h3>
      <div className="profit profit-income">
          <div className="profit-icon">
            <img src={arrowUpIcon} alt="" />
          </div>
          <div className="profit-details">
            <div className="profit-count">1872.75</div>
            <div className="profit-label">Income</div>
          </div>
      </div>
      <div className="profit profit-expenses">
      <div className="profit-icon">
            <img src={ArrowDownIcon} alt="" />
          </div>
          <div className="profit-details">
            <div className="profit-count">895.52</div>
            <div className="profit-label">Expanses</div>
          </div>
      </div>
    </div>
    )
  }
}

export default Profit
