import React, { Component } from 'react'
import BitcoinAlt from '../../assets/icons/bitcoin-alternative.svg'
import LitecoinAlt from '../../assets/icons/litecoin-alternative.svg'
import EthereumAlt from '../../assets/icons/ethereum-alternative.svg'

export class RecentTransactions extends Component {
    render() {
        return (
            <div className="recent-transactions">
              <h3>Recent Transactions</h3>
              <div className="recent-transaction bitcoin">
                    <div className="coin-logo">
                         <img src={BitcoinAlt} alt="" />
                    </div>
                    <div className="transaction-data">
                        <div className="transaction-amount">
                            <div className="coin-naime">Bitcoin</div>
                            <div className="coin-amount">42.30</div>
                        </div>
                        <div className="transaction-time">
                            <div className="coin-currency">ETH</div>
                            <div className="coin-time">Today, 11: 30AM</div>
                        </div>
                    </div>
              </div>
              <div className="recent-transaction litecoin">
                    <div className="coin-logo">
                         <img src={LitecoinAlt} alt="" />
                    </div>
                    <div className="transaction-data">
                        <div className="transaction-amount">
                            <div className="coin-naime">Litecoin</div>
                            <div className="coin-amount">42.30</div>
                        </div>
                        <div className="transaction-time">
                            <div className="coin-currency">ETH</div>
                            <div className="coin-time">Today, 11: 30AM</div>
                        </div>
                    </div>
              </div>
              <div className="recent-transaction ethereum">
                    <div className="coin-logo">
                         <img src={EthereumAlt} alt="" />
                    </div>
                    <div className="transaction-data">
                        <div className="transaction-amount">
                            <div className="coin-naime">Ethereum</div>
                            <div className="coin-amount">42.30</div>
                        </div>
                        <div className="transaction-time">
                            <div className="coin-currency">ETH</div>
                            <div className="coin-time">Today, 11: 30AM</div>
                        </div>
                    </div>
              </div>
            </div>
        )
    }
}

export default RecentTransactions
