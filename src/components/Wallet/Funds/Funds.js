import React from 'react';
import { useSelector } from 'react-redux';

const Funds = () => {
  const funds = useSelector(state => state.wallet.funds);

  const displayValue = funds.lt(100) ? funds.toFixed(5)
    : funds.lt(100000) ? funds.toFixed(2)
    : funds.lt(1000000) ? funds.toFixed(0)
    : funds.lt(10000000) ? funds.toString().slice(0, 2) + '.' + funds.toString().slice(2, 4) + 'M'
    : funds.lt(100000000) ? funds.toString().slice(0, 3) + '.' + funds.toString().slice(3, 5) + 'M'
    : funds.lt(1000000000) ? funds.toString().slice(0, 1) + '.' + funds.toString().slice(1, 3) + 'B'
    : funds.lt(10000000000) ? funds.toString().slice(0, 2) + '.' + funds.toString().slice(2, 4) + 'B'
    : funds.lt(100000000000) ? funds.toString().slice(0, 3) + '.' + funds.toString().slice(3, 5) + 'B'
    : funds.lt(1000000000000) ? funds.toString().slice(0, 1) + '.' + funds.toString().slice(1, 3) + 'T'
    : "Too much money";

  return (
    <h3>${displayValue}</h3>
  )
}

export default Funds;

