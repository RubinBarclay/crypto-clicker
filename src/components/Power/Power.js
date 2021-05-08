import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Power.module.css';

const Power = () => {
  const { cost, rate, watts } = useSelector(state => ({
    cost: state.power.cost,
    rate: state.power.rate,
    watts: state.power.watts,
  }));

  return (
    <div className={classes.Power}>
      <h2>Power</h2>
      <h3>${cost.toFixed(3)}/kwh</h3>
      <span>Electricity rate: ${rate}/kWh</span>
      <span>Consumption: {watts}W</span>
    </div>
  )
}

export default Power;
