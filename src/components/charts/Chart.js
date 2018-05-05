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
  Crosshair
} from "react-vis";

import '../../../node_modules/react-vis/dist/style.css'

const Chart = props => {
  console.log(props.data);
  return (
    <XYPlot width={800} height={500}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis  title = "Date" tickFormat={d => `${new Date(d).getMonth()}-${new Date(d).getFullYear()}`}/>
      <YAxis  title = "price"/>
      <LineSeries data={props.data} />
    </XYPlot>
  );
};
export default Chart;
