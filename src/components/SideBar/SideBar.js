import React from "react";
import InputBar from "./InputBar";
import StockCard from "./StockCard";
import { connect } from "react-redux";
import "./SideBar.css";

const SideBar = props => {
  const error = props.error ? props.error.error : null;
  return (
    <div className="sidebar">
      <div>
        {error && (
          <div className="error-box">
            <p>Invalid Stock Code</p>
          </div>
        )}
        {!props.stocks.length ? (
          <p className="nostock">No stocks added </p>
        ) : (
          <div className="card-container">
            {props.stocks.map(stock => (
              <StockCard key={stock.dataset.id} stock={stock.dataset} />
            ))}
          </div>
        )}
      </div>
      <InputBar />
    </div>
  );
};

const mapStateToProps = state => ({
  stocks: state.stocks,
  error: state.errors
});

export default connect(mapStateToProps)(SideBar);
