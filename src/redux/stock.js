import axios from "axios";
import { addError } from "./error.js";

const ADD_STOCK = "ADD_STOCK";
const REMOVE_STOCK = "REMOVE_STOCK";

const addStock = stock => ({ type: ADD_STOCK, stock });
export const removeStock = stockCode => ({ type: REMOVE_STOCK, stockCode });

export default function stockReducer(stocks = [], action) {
  switch (action.type) {
    case ADD_STOCK:
      return [...stocks, action.stock];
    case REMOVE_STOCK:
      return stocks.filter(
        stock => stock.dataset.dataset_code !== action.stockCode
      );
    default:
      return stocks;
  }
}

export const getStock = stockCode => dispatch => {
  return axios
    .get(
      `https://www.quandl.com/api/v3/datasets/WIKI/${stockCode}.json?api_key=${
        process.env.REACT_APP_QUANDL_KEY
      }`
    )
    .then(res => {
      dispatch(addStock(res.data));
    })
    .catch(err => dispatch(addError({ error: err })));
};
