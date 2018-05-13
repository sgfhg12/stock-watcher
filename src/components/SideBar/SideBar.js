import React from "react";
import InputBar from "./InputBar";
import StockCard from "./StockCard";
import { connect } from "react-redux";
import "./SideBar.css";

const SideBar = props => {
  return (
    <div className="sidebar">
      <div>
        {props.stocks.map(stock => <StockCard stock={stock.dataset} />)}
      </div>
      <InputBar />
    </div>
  );
};

const mapStateToProps = state => ({
  stocks: state.stocks
});

export default connect(mapStateToProps)(SideBar);
