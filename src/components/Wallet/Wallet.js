import React from 'react';
import Funds from './Funds/Funds';
import Coins from './Coins/Coins';
import Notification from './Notification/Notification';
import classes from './Wallet.module.css';

const Wallet = () => (
  <div className={classes.Wallet}>
    <h2>Wallet</h2>
    <Funds />
    <Notification />
    <Coins />
  </div>
)

export default Wallet;
