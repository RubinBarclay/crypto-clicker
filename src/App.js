import React, { Component } from 'react';
import './App.css';

import MiningRig from './components/MiningRig/MiningRig';
import Power from './components/Power/Power';
import Wallet from './components/Wallet/Wallet';
import Shop from './components/Shop/Shop';
import shopItems from './components/Shop/items';

// import rigImage from './assets/images/level1.png';

class App extends Component {
  state = {
    wallet: {
      total: 0,
      bitcoins: 0,
    },
    power: {
      rate: 0.13,
      watts: 100,
    },
    activeRate: 5,
    passiveRate: 1,
    passiveInterval: 1000,
    level: 1,
    shop: shopItems,
    // have hourCount be in state so you can change it
  }

  miningHandler = (miningRate) => {
    let BTC = this.state.wallet.bitcoins;
    this.setState({ 
      wallet: {
        bitcoins: (BTC + (miningRate / 100000000)),
        total: ((BTC + (miningRate / 100000000)) * 10000)
      }
    })
  }

  miningRigHandler = () => {

  }

  electricityBillHandler = (watts, rate) => {
    let bill = (watts / 1000) * rate;
    this.setState({
      wallet: {
        total: this.state.wallet.total - bill,
        bitcoins: this.state.wallet.bitcoins - bill / 10000,
      }
    })
  }

  purchaseHandler = (item) => {
    this.setState({
      wallet: {
        total: this.state.wallet.total - item.price,
        bitcoins: this.state.wallet.bitcoins - item.price / 10000,
      },
      power: { // these only change if there is a change
        watts: item.watts ? item.watts : this.state.power.watts, // if watts is not 0 (falsy), then show new wattage
        rate: item.rate ? item.rate : this.state.power.rate
      },
      shop: shopItems.slice(shopItems.indexOf(item) + 1),
      // mining rates exponentially increase
      activeRate: this.state.activeRate * item.activeBuff,
      passiveRate: this.state.passiveRate * item.passiveBuff,
      // passiveInterval: 0,
      level: item.level ? item.level : this.state.level,
    })
  }

  
  componentDidMount() {
    let hourCount = 0;
    setInterval(() => {
      this.miningHandler(this.state.passiveRate);

      if (hourCount >= 36000) { // 18s === 1 hour
        this.electricityBillHandler(
          this.state.power.watts,
          this.state.power.rate);
        hourCount = 0;
      } else {
        hourCount += this.state.passiveInterval;
      }
    }, this.state.passiveInterval);
  }
  
  render() {
    return (
      <div className="App">
        <MiningRig 
          level={this.state.level}
          clicked={() => this.miningHandler(this.state.activeRate)} />
        <Power
          watts={this.state.power.watts} 
          rate={this.state.power.rate} />
        <Wallet 
          total={this.state.wallet.total} 
          bitcoins={this.state.wallet.bitcoins} />
        <Shop funds={this.state.wallet.total} 
          items={this.state.shop}
          purchase={this.purchaseHandler} />
      </div>
    );
  }
}

export default App;
