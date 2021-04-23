import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import classes from './MiningRig.module.css';
import machines from './machines';

import btcLogo from '../../assets/logos/bitcoin-btc-logo.svg';

const MiningRig = () => {
  const level = useSelector(state => state.wallet.level);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
    <img
      src={machines[level].img}
      alt={machines[level].alt}
      className={classes.MiningRig} 
      onClick={() => dispatch({ type: actionTypes.ACTIVE_MINING })} />
      <img className={classes.coins} src={btcLogo} alt="btc" />
    </React.Fragment>
  )
};

export default MiningRig;
