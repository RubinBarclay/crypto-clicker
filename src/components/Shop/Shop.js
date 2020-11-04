import React from 'react';
import classes from './Shop.module.css';
import Listing from './Listing/Listing';
// import items from './items'; // list of items for shop

/*let items = [
  { key: "1", 
    name:"PC upgrade", 
    desc:"Increase efficiency", 
    price: 0.01,
    watts: 120,
    rate: 0,
    activeBuff: 5,
    passiveBuff: 1,
  },
  { key: "2", name:"New PC", desc:"Increase mining speed", price:0.02},
  { key: "3", name:"GPU upgrade", desc:"Increase efficiency", price:0.025},
  { key: "4", name:"Accidental double click", desc:"Small chance to double click", price:0.03},
  { key: "5", name:"New gaming PC", desc:"Increase efficiency", price:0.35},
  { key: "6", name:"Another GPU upgrade", desc:"Increase efficiency", price:100}
]
*/
const Shop = (props) => {
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

  return (
    <div className={classes.Shop}>
      <h2>Shop</h2>
      <div>
        {activeListings}
      </div>
    </div>
  )
}

export default Shop;