import React from 'react';
import classes from './Wallet.module.css';

const Wallet = () => {
  return (
    <div className={classes.Wallet}>
      <h2>Wallet</h2>
      <h3>$0</h3>
      <div> 
        <span>BTC: 0</span>
      </div>
    </div>
  )
}

export default Wallet;
