import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Notification.module.css';
// import logos from './logos';

const Notification = () => {
  const gains = useSelector(state => state.wallet.gains);



  const notice = gains ? (
    <div className={classes.notification}>
      {/* <img className={classes.coin} src={logos.BTC} alt="btc" /> */}
      <p className={gains.gte(0) ? classes.textGreen : classes.textRed}>
        {gains.gte(0) ? '+$' + gains.toFixed(5) : '-$' + gains.abs().toFixed(5) }
      </p>
    </div> ) : null;

  return notice;
};

export default Notification;
