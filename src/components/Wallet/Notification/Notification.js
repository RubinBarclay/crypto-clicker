import React from 'react';
import classes from './Notification.module.css';
import { useSelector } from 'react-redux';

const Notification = () => {
  const profits = useSelector(state => state.wallet.totalProfits);

  const displayValue =  profits.gte(0) 
    ? '+$' + profits.toFixed(profits.lt(10) ? 5 : profits.lt(10000) ? 2 : 0)
    : '-$' + profits.abs().toFixed(profits.abs().lt(10) ? 5 : profits.abs().lt(10000) ? 2 : 0);

  return (
    <div className={classes.notification}>
      <p key={Math.random()} className={profits.gte(0) ? classes.textGreen : classes.textRed}>
        { displayValue }
      </p>
    </div> 
  )
};

export default Notification;
