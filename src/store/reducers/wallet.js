import * as actionTypes from '../actions/actionTypes';

const initialState = {
  value: 0,
  bitcoin: 0,
  data: [],
  error: '',
  price: {}
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return { 
        ...state, 
        value: state.bitcoin * state.price.BTC,
        bitcoin: state.bitcoin + 1,
        price: { ...state.price }
      };
    case actionTypes.FETCH_LISTINGS_SUCCESS:
      return { 
        ...state, 
        price: {
          ...state.price,
          BTC: action.payload.bitcoin.usd
        }
      };
    case actionTypes.FETCH_LISTINGS_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default walletReducer;
