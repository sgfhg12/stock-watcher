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
        <button
          onClick={evt =>
            this.props.deleteStock(evt, this.props.stock.dataset_code)
        }>
          x
        </button>
        <p>{this.props.stock.dataset_code}</p>
        <p>{this.props.stock.name}</p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteStock: (evt, stockCode) => {
    evt.preventDefault();
    console.log('poop')
    return dispatch(removeStock(stockCode));
  }
});

export default connect(null, mapDispatchToProps)(StockCard);
