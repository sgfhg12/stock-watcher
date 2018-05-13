import React from "react";
import { connect } from "react-redux";
import { removeStock } from "../../redux/stock";

export class StockCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        
        <p className="stock-code">{this.props.stock.dataset_code}</p>
        <p className="buttonwrapper">{this.props.stock.name}
        <button
          onClick={evt =>
            this.props.deleteStock(evt, this.props.stock.dataset_code)
        }>
          REMOVE STOCK
        </button>
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteStock: (evt, stockCode) => {
    evt.preventDefault();
    return dispatch(removeStock(stockCode));
  }
});

export default connect(null, mapDispatchToProps)(StockCard);
