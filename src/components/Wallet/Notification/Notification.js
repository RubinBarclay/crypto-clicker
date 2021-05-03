import React from 'react';
import classes from './Notification.module.css';
import { useSelector } from 'react-redux';

const Notification = () => {
  const profits = useSelector(state => state.wallet.totalProfits);

  return (
    <div className={classes.notification}>
      <p key={Math.random()} className={profits.gte(0) ? classes.textGreen : classes.textRed}>
        { profits.gte(0) ? '+$' + profits.toFixed(5) : '-$' + profits.abs().toFixed(5) }
      </p>
    </div> 
  )
};

export default Notification;
