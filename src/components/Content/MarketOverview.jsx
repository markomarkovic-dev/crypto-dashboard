import React, { Component } from 'react'

export class MarketOverview extends Component {
  render() {
    return (
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
    )
  }
}

export default MarketOverview
