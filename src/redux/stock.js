import axios from "axios";

const ADD_STOCK = "ADD_STOCK";

const addStock = stock => ({ type: ADD_STOCK, stock });

export default function reducer(stocks = [], action) {
  switch (action.type) {
    case ADD_STOCK:
      return [...stocks, action.stock];
    default:
      return stocks
  }
}

export const getStock = stockCode => dispatch => {

  return axios
    .get(
        `https://www.quandl.com/api/v3/datasets/WIKI/${stockCode}.json?api_key=${process
        .env.REACT_APP_QUANDL_KEY}`
    )
    .then(res => {
      dispatch(addStock(res.data));
    })
    .catch(err => console.log(err));
};
