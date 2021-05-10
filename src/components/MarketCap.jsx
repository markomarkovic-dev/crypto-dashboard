import React, { Component } from "react";
import arrowUpIcon from '../assets/icons/profit-arrow-up.svg';
import ArrowDownIcon from '../assets/icons/profit-arrow-down.svg';
import MenProfileIcon from '../assets/icons/man.svg';
import GirlProfileIcon from '../assets/icons/girl.svg';
import PaperPlaneIcon from '../assets/icons/paper-plane.svg';

export class MarketCap extends Component {
  render() {
    return (
      <div className="grid-row-3">
        <div className="market-overview">
          <div className="market-header">
            <h3>Market Overview</h3>
            <div className="select">
              <select name="" id="">
                <option value="Monthly" selected>
                  Monthly
                </option>
                <option value="Yearly">Yearly</option>
                <option value="Daily">Daily</option>
              </select>
            </div>
          </div>
          <div className="market-footer">
            <div className="indicator indicator-bitcoin">BTC</div>
            <div className="indicator indicator-litecoin">LTC</div>
            <div className="indicator indicator-ethereum">ETH</div>
          </div>
        </div>
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
      </div>
    );
  }
}

export default MarketCap;
