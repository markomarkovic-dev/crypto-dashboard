import React, { Component } from "react";

export class MarketCap extends Component {
  render() {
    return (
      <div class="grid-row-3">
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
          
        </div>
        <div className="quick-transfer">
          <h3>Quick Transfer</h3>
        </div>
      </div>
    );
  }
}

export default MarketCap;
