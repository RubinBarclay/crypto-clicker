import * as actionTypes from '../actions/actionTypes';
import Big from 'big.js';

const initialState = {
  value: new Big(0),
  activeRate: 5,     // 10%
  passiveRate: 1,     // 2%
  coins: { BTC: new Big(0) },
  price: {}
};

const walletReducer = (state = initialState, action) => {

  const updateValue = (rate) => {
    return state.coins.BTC.plus(rate / 100000000).times(state.price.BTC);
  }

  const updateCoin = (coin, rate) => {
    return coin.plus(rate / 100000000);
  }

  switch (action.type) {
    case actionTypes.ACTIVE_MINING:
      return { 
        ...state, 
        value: updateValue(state.activeRate),
        coins: {
          ...state.coins,
          BTC: updateCoin(state.coins.BTC, state.activeRate),
        },
        price: { ...state.price },
      };
    case actionTypes.PASSIVE_MINING:
      return {
        ...state,
        value: updateValue(state.passiveRate),
        coins: {
          ...state.coins,
          BTC: updateCoin(state.coins.BTC, state.passiveRate),
        },
        price: { ...state.price },
      }
    case actionTypes.ELECTRICITY_BILL:
      return {
        ...state,
        value: state.value.minus(action.cost),
        coins: { 
          ...state,
          BTC: state.coins.BTC.minus(action.cost.div(state.price.BTC))
        },
        price: { ...state.price }
      }
    case actionTypes.FETCH_LISTINGS_SUCCESS:
      return { 
        ...state, 
        coins: { ...state.coins },
        price: {
          BTC: action.payload.bitcoin.usd,
          ETH: action.payload.ethereum.usd,
          LTC: action.payload.litecoin.usd,
          DOGE: action.payload.dogecoin.usd,
          BCH: action.payload.["bitcoin-cash"].usd,
          ADA: action.payload.cardano.usd,
          XMR: action.payload.monero.usd,
        }
      };
    case actionTypes.FETCH_LISTINGS_FAIL:
      return { 
        ...state, 
        coins: { ...state.coins },
        price: { // Backup prices
          BTC: 65000,
          ETH: 2500,
          LTC: 300,
          DOGE: 0.15,
          BCH: 800,
          ADA: 1.5,
          XMR: 350,
        },
        error: action.payload
      };
    default:
      return state;
  }
}

export default walletReducer;
