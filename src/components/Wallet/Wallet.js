import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import classes from './Wallet.module.css';
import { round } from '../../utilities/round';

const Wallet = () => {
  const { value, bitcoin } = useSelector(state => ({
    value: state.wallet.value,
    bitcoin: state.wallet.coins.BTC,
  }));

  return (
    <div className={classes.Wallet}>
      <h2>Wallet</h2>
        <h3>${value.toFixed(5)}</h3>
      <div> 
        <span>BTC: {bitcoin.toFixed(8)}</span>
      </div>
    </div>
  )
}

export default Wallet;
