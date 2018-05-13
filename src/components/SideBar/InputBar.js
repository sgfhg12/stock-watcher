import React from "react";
import { connect } from "react-redux";
import { getStock } from "../../redux/stock.js";
import checkMark from './checkmark.png';
import { deleteError } from '../../redux/error.js'

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
  renderErrorMsg(){
    setTimeout(()=> this.props.deleteError(), 3000)
  }
  render() {
    const error = this.props.error ? this.props.error.error : null
    return (
      <div>
        <form className="stockform" onSubmit={event => this.addStock(event)}>
          <input
            id="stockCode"
            type="text " placeholder= "  Enter stock code..."
            onChange={event => this.handleChange(event)}
            value={this.state.value}
          />
          {error && <p>Invalid Stock Code</p>}
          {error && this.renderErrorMsg()}
          <img src={checkMark} onClick={event => this.addStock(event)}/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stocks: state.stocks,
  error: state.errors
});

export default connect(mapStateToProps, { getStock,deleteError })(InputBar);
