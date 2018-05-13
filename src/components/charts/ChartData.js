import React from "react";
import { connect } from "react-redux";
import Chart from "./Chart";
import "./chart.css";

class ChartData extends React.Component {
  constructor(props) {
    super(props);
  }
  renderChart(props) {
    if (props.stocks[0] === undefined) {
      return <div> No Data is Available</div>;
    } else {
      let data = [];
      let arrayColumn = (arr, n) => arr.map(ele => ele[n]);

      props.stocks.forEach((stock, ind) => {
        let col1 = arrayColumn(stock.dataset.data, 0);
        let col2 = arrayColumn(stock.dataset.data, 1);
        let len = stock.dataset.data.length;
        let dates = col1.map(date => new Date(date).getTime());
        let stockInfo = [];
        for (let i = 0; i < len; i++) {
          stockInfo.push({
            x: dates[i],
            y: col2[i]
          });
        }
        data.push(stockInfo);
      });
      return (
        <div className="chart">
          <Chart data={data} stocks={props.stocks} />
        </div>
      );
    }
  }
  render() {
    return <div>{this.renderChart(this.props)}</div>;
  }
}

const mapStateToProps = state => ({
  stocks: state.stocks
});

export default connect(mapStateToProps)(ChartData);
