import React from 'react';
import { useSelector } from 'react-redux';

const Coins = () => {
  const bitcoin = useSelector(state => state.wallet.coins.BTC); 

  const decimalCount = {
    BTC: bitcoin.lt(100) ? 8 : bitcoin.lt(10000) ? 4 : 2,
  }

  return (
    <div> 
      <span>BTC: {bitcoin.toFixed(decimalCount.BTC)}</span>
    </div>
  )
}

export default Coins;
