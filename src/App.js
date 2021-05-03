import React, { useEffect } from 'react';
import MiningRig from './components/MiningRig/MiningRig';
import Power from './components/Power/Power';
import Shop from './components/Shop/Shop';
import Wallet from './components/Wallet/Wallet';
import { useDispatch } from 'react-redux';
import { fetchListings, electricityBill } from './store/actions/actionCreators';
import * as actionTypes from './store/actions/actionTypes';
import './App.css';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListings());

    let billTimer = 0;
    setInterval(() => {
      // Passive mining
      dispatch({ type: actionTypes.PASSIVE_MINING });
      dispatch({ type: actionTypes.REPORT_PROFITS });

      // Electicity bill mechanism
      if (billTimer === 10) {
        dispatch(electricityBill()); // Cost is accessed within actionCreator
        billTimer = 0;
      } else {
        billTimer++;
      }
    }, 1000);
  });

  return (
    <div className="App">
      <MiningRig />
      <Power />
      <Wallet />
      <Shop />
    </div>
  );
}

export default App;
