import { 
  FETCH_LISTINGS_REQUEST,
  FETCH_LISTINGS_SUCCESS,
  FETCH_LISTINGS_FAIL
} from './actionTypes';

export const fetchListings = () => dispatch => {
  dispatch({ type: FETCH_LISTINGS_REQUEST });

  //const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?CMC_PRO_API_KEY=bba2c989-190e-4242-8127-d96e3d3521bf&id=1,1027,52,2010,74,328';
  const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Clitecoin%2Cbitcoin-cash%2Cdogecoin%2Ccardano%2Cmonero&vs_currencies=usd';
  //const options = { headers: { 'X-CMC_PRO_API_KEY': 'bba2c989-190e-4242-8127-d96e3d3521bf' } };

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return dispatch({ 
        type: FETCH_LISTINGS_SUCCESS, 
        payload: data
      });
    })
    .catch(error => (
      dispatch({ 
        type: FETCH_LISTINGS_FAIL, 
        payload: error 
      })
    ));
}
