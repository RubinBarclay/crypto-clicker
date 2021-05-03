import React from 'react';
import { useSelector } from 'react-redux';

const Funds = () => {
  const funds = useSelector(state => state.wallet.funds);

  return (
    <h3>${funds.toFixed(funds.lt(100) ? 5 : 2)}</h3>
  )
}

export default Funds;

