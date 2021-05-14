import Big from 'big.js';
import * as actionTypes from '../actions/actionTypes';
import items from '../../items';

const initialState = {
  level: 1,
  totalProfits: new Big(0),
  newProfits: new Big(0),
  funds: new Big(0),
  activeRate: new Big(10),
  passiveRate: new Big(2.5),
  coins: { BTC: new Big(0) },
  price: {},
  items: [ ...items ]
};

const walletReducer = (state = initialState, action) => {

  const updateProfits = (rate) => {
    return state.newProfits.plus(rate.div(100000000).times(state.price.BTC));
  }

  const updateValue = (rate) => {
    const newCoins = rate.div(100000000); // works only for BTC atm
    return state.coins.BTC.plus(newCoins).times(state.price.BTC);
  }

  const updateCoin = (coin, rate) => {
    const newCoins = rate.div(100000000); // works only for BTC atm
    return coin.plus(newCoins);
  }

  switch (action.type) {
    case actionTypes.ACTIVE_MINING:
      return { 
        ...state, 
        newProfits: updateProfits(state.activeRate),
        funds: updateValue(state.activeRate),
        coins: {
          ...state.coins,
          BTC: updateCoin(state.coins.BTC, state.activeRate),
        },
        price: { ...state.price },
        items: [ ...state.items ]
      };
    case actionTypes.PASSIVE_MINING:
      return {
        ...state,
        newProfits: updateProfits(state.passiveRate),
        funds: updateValue(state.passiveRate),
        coins: {
          ...state.coins,
          BTC: updateCoin(state.coins.BTC, state.passiveRate),
        },
        price: { ...state.price },
        items: [ ...state.items ]
      }
    case actionTypes.ELECTRICITY_BILL:
      return {
        ...state,
        newProfits: state.newProfits.minus(action.cost),
        funds: state.funds.minus(action.cost),
        coins: { 
          ...state.coins,
          BTC: state.coins.BTC.minus(action.cost.div(state.price.BTC))
        },
        price: { ...state.price },
        items: [ ...state.items ]
      }
    case actionTypes.BUY_ITEM:
      return {
        ...state,
        newProfits: state.newProfits.minus(action.price),
        level: action.level ? action.level : state.level,
        funds: state.funds.minus(action.price),
        activeRate: state.activeRate.times(action.buffs.active),
        passiveRate: state.passiveRate.times(action.buffs.passive),
        coins: { 
          ...state.coins,
          BTC: state.coins.BTC.minus(action.price / state.price.BTC)
        },
        price: { ...state.price },
        items: state.items.filter(item => item.key !== action.key)
      }
    case actionTypes.REPORT_PROFITS:
      return {
        ...state, 
        totalProfits: state.newProfits,
        newProfits: new Big(0), 
        coins: { ...state.coins },
        price: { ...state.price },
        items: [ ...state.items ]
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
          BCH: action.payload["bitcoin-cash"].usd,
          ADA: action.payload.cardano.usd,
          XMR: action.payload.monero.usd,
        },
        items: [ ...state.items ]
      };
    case actionTypes.FETCH_LISTINGS_FAIL:
      return { 
        ...state, 
        coins: { ...state.coins },
        price: { // Backup prices
          BTC: 55000,
        },
        items: [ ...state.items ],
        error: action.payload
      };
    default:
      return state;
  }
}

export default walletReducer;
