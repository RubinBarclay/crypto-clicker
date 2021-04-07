import React from 'react';
import classes from './Shop.module.css';
import Listing from './Listing/Listing';

const Shop = () => {
  /*
  let activeListings = props.items.filter(listing => (
      listing.price <= props.funds
    )).map(listing => {
      return (
        <Listing
          key={listing.key}
          name={listing.name}
          desc={listing.desc}
          price={listing.price}
          purchase={() => props.purchase(listing)} />
        )
      });
  */

  return (
    <div className={classes.Shop}>
      <h2>Shop</h2>
      <div></div>
    </div>
  )
}

export default Shop;
