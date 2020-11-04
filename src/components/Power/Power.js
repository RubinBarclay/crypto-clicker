import React from 'react';
import classes from './Power.module.css';

const Power = (props) => {
  let powerCost = (props.watts / 1000) * props.rate;
  return (
    <div className={classes.Power}>
      <h2>Power</h2>
      <h3>${powerCost.toFixed(3)}/kWh</h3>
      <span>Electricity rate: ${props.rate}/kWh</span>
      <span>Consumption: {props.watts}W</span>
    </div>
  )
}

export default Power;