import React from "react";
import { connect } from "react-redux";
import { getStock } from "../../redux/stock";
import checkMark from './checkmark.png';

export class InputBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }

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
          <input
            id="stockCode"
            type="text " placeholder= "  Enter stock code..."
            onChange={event => this.handleChange(event)}
            value={this.state.value}
          />
          <img src={checkMark} onClick={event => this.addStock(event)}/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stocks: state.stocks
});

export default connect(mapStateToProps, { getStock })(InputBar);
