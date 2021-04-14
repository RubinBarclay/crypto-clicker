import React, { useEffect } from 'react';
import MiningRig from './components/MiningRig/MiningRig';
import Power from './components/Power/Power';
import Shop from './components/Shop/Shop';
import Wallet from './components/Wallet/Wallet';
import { useDispatch } from 'react-redux';
import { fetchListings } from './store/actions/asyncActions';
import * as actionTypes from './store/actions/actionTypes';
import './App.css';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListings());
    const intervalID = setInterval(() => {
      dispatch({ type: actionTypes.PASSIVE_MINING });
    }, 1000);
  }, []);

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
