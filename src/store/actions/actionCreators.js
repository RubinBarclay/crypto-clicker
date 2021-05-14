import * as actionTypes from './actionTypes';

export const fetchListings = () => dispatch => {
  const url = ''; // I'm delibrately failing the api request, recent volatile prices makes the game very unbalanced
  // const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Clitecoin%2Cbitcoin-cash%2Cdogecoin%2Ccardano%2Cmonero&vs_currencies=usd';
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return dispatch({ 
        type: actionTypes.FETCH_LISTINGS_SUCCESS, 
        payload: data
      });
    })
    .catch(error => (
      dispatch({ 
        type: actionTypes.FETCH_LISTINGS_FAIL, 
        payload: error 
      })
    ));
}

export const electricityBill = () => (dispatch, getState) => {
  const cost = getState().power.cost;
  dispatch({
    type: actionTypes.ELECTRICITY_BILL,
    cost: cost
  });
}
