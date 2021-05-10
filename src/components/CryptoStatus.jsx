import React, { Component } from "react";
import BitcoinIcon from '../assets/icons/bitcoin.svg';
import litecoinIcon from '../assets/icons/litecoin.svg';
import EthereumIcon from '../assets/icons/ethereum.svg';
import ArrowsIcon from '../assets/icons/arrows.svg';

export class CryptoStatus extends Component {
  render() {
    return (
      <div className="grid-row-3">
        <div className="crypto-status bitcoin-status">
          <div className="crypto-logo">
              <img src={BitcoinIcon} alt="" />
          </div>
          <div className="cripto-market">
            <div className="cripto-currency">
                <span>BTC</span>
                <img src={ArrowsIcon} alt="" />
                <span>USD</span>
            </div>
            <div className="cripto-value-status positive">
                5.23%
            </div>
          </div>
          <div className="crypto-current-value">
            8442.33
          </div>
          <div className="crypto-chart"></div>
        </div>
        <div className="crypto-status litecoin-status">
           <div className="crypto-logo">
              <img src={litecoinIcon} alt="" />
          </div>
          <div className="cripto-market">
            <div className="cripto-currency">
                <span>LTC</span>
                <img src={ArrowsIcon} alt="" />
                <span>USD</span>
            </div>
            <div className="cripto-value-status negative">
                -9.21%
            </div>
          </div>
          <div className="crypto-current-value">
            4786.66
          </div>
          <div className="crypto-chart"></div>
        </div>
        <div className="crypto-status ethereum-status">
        <div className="crypto-logo">
              <img src={EthereumIcon} alt="" />
        </div>
        <div className="cripto-market">
            <div className="cripto-currency">
                <span>ETH</span>
                <img src={ArrowsIcon} alt="" />
                <span>USD</span>
            </div>
            <div className="cripto-value-status positive">
                6.33%
            </div>
          </div>
          <div className="crypto-current-value">
            8442.33
          </div>
          <div className="crypto-chart"></div>
        </div>
      </div>
    );
  }
}

export default CryptoStatus;
