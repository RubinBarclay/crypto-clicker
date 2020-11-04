import React from 'react';
import classes from './MiningRig.module.css';

const miningRig = (props) => {
  return (
    <img
      src={`/images/level${props.level}.png`}
      alt="mining rig"
      className={classes.MiningRig}
      onClick={props.clicked} />
  )
};

export default miningRig;