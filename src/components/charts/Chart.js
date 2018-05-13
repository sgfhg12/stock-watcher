import React from "react";
import PropTypes from "prop-types";
import {
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis,
  LineSeries,
  Borders,
  GradientDefs,
  linearGradient,
  makeWidthFlexible,
  Crosshair,
  FlexibleWidthXYPlot
} from "react-vis";
import "../../../node_modules/react-vis/dist/style.css";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crossHairValues: [{ x: 0, y: 0 }]
    };
  }

  renderLines(props) {
    return props.data.map(line => {
      return (
        <LineSeries
          onNearestX={(value, { index }) => {
            this.setState({ crossHairValues: props.data.map(d => d[index]) });
          }}
          data={line}
        />
      );
    });
  }

  render() {
    return (
      <div style={{ width: "80vw", height: "100vh", marginLeft: "1em" }}>
        <FlexibleWidthXYPlot height={500}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis
            title="Date"
            tickFormat={d =>
              `${new Date(d).getMonth() + 1}-${new Date(d).getFullYear()}`
            }
          />
          <YAxis title="Price" />
          {this.renderLines(this.props)}
          <Crosshair values={this.state.crossHairValues}>
            <div className="crossbox">
              <p>
                Date:
                {" " +
                  (
                    new Date(
                      this.state.crossHairValues[
                        this.state.crossHairValues.length - 1
                      ].x
                    ).getMonth() +
                    1 +
                    "-" +
                    new Date(
                      this.state.crossHairValues[
                        this.state.crossHairValues.length - 1
                      ].x
                    ).getFullYear()
                  ).toString()}
              </p>
              {this.state.crossHairValues.map(
                (elem, ind) =>
                  elem === undefined ? (
                    <p key={ind}>No data</p>
                  ) : (
                    <p key={ind}>
                      {this.props.stocks[ind] === undefined
                        ? "No data"
                        : this.props.stocks[ind].dataset.dataset_code +
                          ": " +
                          "$" +
                          elem.y}
                    </p>
                  )
              )}
            </div>
          </Crosshair>
        </FlexibleWidthXYPlot>
      </div>
    );
  }
}

export default Chart;
