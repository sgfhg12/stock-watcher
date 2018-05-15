import React from "react";
import { connect } from "react-redux";
import { removeStock } from "../../redux/stock";

const StockCard = props => {
  return (
    <div>
      <p className="stock-code">{props.stock.dataset_code}</p>
      <p className="buttonwrapper">
        {props.stock.name}
        <button
          onClick={evt =>
            props.deleteStock(evt, props.stock.dataset_code)
          }
        >
          REMOVE STOCK
        </button>
      </p>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteStock: (evt, stockCode) => {
    evt.preventDefault();
    return dispatch(removeStock(stockCode));
  }
});

export default connect(null, mapDispatchToProps)(StockCard);
