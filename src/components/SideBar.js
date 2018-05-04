import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getStock } from "../redux/stock";
import SideRender from "./SideRender";

export class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.addStock = this.addStock.bind(this);
    this.handleChange = this.handleChange.bind(this)
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
        <SideRender
          stocks={this.props.stocks}
          addStock={this.addStock}
          onChange={this.handleChange}
          value={this.state.value}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stocks: state.stocks
});

export default connect(mapStateToProps, { getStock })(SideBar);
