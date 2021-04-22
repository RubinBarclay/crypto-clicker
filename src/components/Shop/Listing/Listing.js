import React from 'react';
import classes from './Listing.module.css';

const Listing = (props) => {
  return (
    <div className={classes.Listing}>
      <div>
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
      </div>
      <span>${props.price}</span>
      <button onClick={props.purchase}>Buy</button>
    </div>
  )
}

export default Listing;
