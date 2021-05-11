import React, { Component } from "react";
import Profit from './Content/Profit';
import QuickTransfer from './Content/QuickTransfer';
import MarketOverview from './Content/MarketOverview';
import CryptoStatus from './Content/CryptoStatus';

export class MarketCap extends Component {
  render() {
    return (
      <>
      <CryptoStatus/>
      <div className="grid-row-3">
        <MarketOverview/>
        <Profit/>
        <QuickTransfer/>
      </div>
      </>
    );
  }
}

export default MarketCap;
