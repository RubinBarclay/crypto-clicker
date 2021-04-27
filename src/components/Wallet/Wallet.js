import React from 'react';
import Notification from './Notification/Notification';
import { useSelector } from 'react-redux';
import classes from './Wallet.module.css';

const Wallet = () => {
  const { value, bitcoin } = useSelector(state => ({
    value: state.wallet.value,
    bitcoin: state.wallet.coins.BTC,
  }));

  const decimalCount = {
    value: value.lt(100) ? 5 : 2,
    BTC: bitcoin.lt(100) ? 8 : bitcoin.lt(10000) ? 4 : 2,
  }

  return (
    <div className={classes.Wallet}>
      <h2>Wallet</h2>
        <h3>${value.toFixed(decimalCount.value)}</h3>
        <Notification />
      <div> 
        <span>BTC: {bitcoin.toFixed(decimalCount.BTC)}</span>
      </div>
    </div>
  )
}

export default Wallet;
