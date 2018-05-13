import React from "react";
import { connect } from "react-redux";
import { getStock } from "../../redux/stock";

export class InputBar extends React.Component {
  constructor(props) {
    super(props);

    this.addStock = this.addStock.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  addStock(event) {
    event.preventDefault();
    this.props.getStock(this.state.value);
    this.setState({ value: "" });
  }

  render() {
    return (
      <div>
        <form className="stockform" onSubmit={event => this.addStock(event)}>
          <button onClick={event => this.addStock(event)}>ADD STOCK</button>
          <input
            id="stockCode"
            type="text"
            onChange={event => this.handleChange(event)}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stocks: state.stocks
});

export default connect(mapStateToProps, { getStock })(InputBar);
