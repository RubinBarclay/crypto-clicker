import * as actionTypes from '../actions/actionTypes';
import Big from 'big.js';

const initialState = {
  cost: new Big(0.013), // $/kwh
  rate: 0.13, // average price in US (cents)
  watts: 100,
};

const powerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_POWER_COST:
      return {
        ...state,
        cost: new Big(state.watts / 1000).times(state.rate)
      }
    case actionTypes.UPDATE_POWER_RATE:
      return {
        ...state,
        rate: action.rate
      }
    case actionTypes.UPDATE_POWER_WATTS:
      return {
        ...state,
        watts: action.watts
      }
    default:
      return state;
  }
}

export default powerReducer;
