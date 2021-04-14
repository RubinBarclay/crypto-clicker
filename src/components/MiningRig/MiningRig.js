import React from 'react';
import { useDispatch } from 'react-redux';
import rig from '../../assets/images/level1.png';
import * as actionTypes from '../../store/actions/actionTypes';
import classes from './MiningRig.module.css';

const MiningRig = () => {
  const dispatch = useDispatch();
  return (
    <img
      src={rig}
      alt="mining rig"
      className={classes.MiningRig} 
      onClick={() => dispatch({ type: actionTypes.ACTIVE_MINING })} />
  )
};

export default MiningRig;
