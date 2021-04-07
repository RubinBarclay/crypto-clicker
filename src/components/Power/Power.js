import React from 'react';
import classes from './Power.module.css';

const Power = () => {
  return (
    <div className={classes.Power}>
      <h2>Power</h2>
      <h3>0/kwh</h3>
      <span>Electricity rate: 0/kWh</span>
      <span>Consumption: 0W</span>
    </div>
  )
}

export default Power;
