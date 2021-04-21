import { combineReducers } from 'redux';
import walletReducer from './wallet';
import powerReducer from './power';

const rootReducer = combineReducers({
  wallet: walletReducer,
  power: powerReducer,
});

export default rootReducer;
