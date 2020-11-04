import React from 'react';
import classes from './Wallet.module.css';

const Wallet = (props) => {
  return (
    <div className={classes.Wallet}>
      <h2>Wallet</h2>
      <h3>${props.total.toFixed(4)}</h3>
      <div> 
        <span>BTC: {props.bitcoins.toFixed(8)}</span>
      </div>
    </div>
  )
}

export default Wallet;