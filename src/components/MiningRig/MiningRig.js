import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import classes from './MiningRig.module.css';
import machines from './machines';

const MiningRig = () => {
  const level = useSelector(state => state.wallet.level);
  const dispatch = useDispatch();

  return (
    <img
      src={machines[level].img}
      alt={machines[level].alt}
      className={classes.MiningRig} 
      onClick={() => dispatch({ type: actionTypes.ACTIVE_MINING })} />
  )
};

export default MiningRig;
