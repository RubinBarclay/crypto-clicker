import React from 'react';
import Listing from './Listing/Listing';
import { useSelector, useDispatch } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import classes from './Shop.module.css';

const Shop = ({ tabbed }) => {

  const { level, funds, items } = useSelector(state => ({ 
    level: state.wallet.level, 
    funds: state.wallet.funds, 
    items: state.wallet.items 
  })); 

  const dispatch = useDispatch();

  const activeListings = items.filter(listing => (
    listing.price <= funds && listing.levelReq <= level
    )).map(listing => {
      return (
        <Listing
          key={listing.key}
          name={listing.name}
          desc={listing.desc}
          price={listing.price}
          purchase={() => {
            dispatch({ type: actionTypes.BUY_ITEM, key: listing.key, price: listing.price, buffs: listing.buffs, level: listing.levelUp }) 
            dispatch({ type: actionTypes.UPDATE_POWER, rate: listing.rate, watts: listing.watts }) 
          }}
          />
        )
      });

  return (
    <div className={tabbed ? tabbed :  `${classes.Shop} desktopOnly`}>
      <h2>Shop</h2>
      <div>{activeListings}</div>
    </div>
  )
}

export default Shop;
