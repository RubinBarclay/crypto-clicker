import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchListings } from '../../store/actions/WalletActions';
import classes from './Wallet.module.css';

const Wallet = () => {
  const { value, data, error, bitcoin } = useSelector(state => ({
    value: state.wallet.value,
    bitcoin: state.wallet.bitcoin,
    data: state.wallet.data,
    error: state.wallet.error
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListings());
  }, []);

  return (
    <div className={classes.Wallet}>
      <h2>Wallet</h2>
      <h3>${value}</h3>
      <div> 
        <span>BTC: {bitcoin}</span>
      </div>
      <button onClick={() => dispatch({ type: "INC" })}>INC</button>
    </div>
  )
}

export default Wallet;
