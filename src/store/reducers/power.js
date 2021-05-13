import * as actionTypes from '../actions/actionTypes';
import Big from 'big.js';

const initialState = {
  cost: new Big(0.02), // $/kwh
  rate: new Big(0.13), // average price in US (cents)
  watts: new Big(150),
};

const powerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_POWER:
      const newRate = action.rate ? state.rate.minus(action.rate) : state.rate; 
      const newWatts = action.watts ? state.watts.add(action.watts) : state.watts;
      return {
        cost: new Big(newWatts / 1000).times(newRate),
        rate: newRate,
        watts: newWatts
      }
    default:
      return state;
  }
}

export default powerReducer;
