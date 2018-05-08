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
	}
	renderLines(props) {
		props.data.sort((a, b) => {
			return a.length - b.length;
		});
		return props.data.map((line) => {
			return (
				<LineSeries
					data={line}
				/>
			);
		});
	}

	

	render() {
		return (
			<div style={{width:"80vw", height: "100vh", marginLeft: "1em"}}>
				<FlexibleWidthXYPlot height={500}>
					<VerticalGridLines />
					<HorizontalGridLines />
					<XAxis
						title="Date"
						tickFormat={d =>
							`${new Date(d).getMonth()}-${new Date(d).getFullYear()}`
						}
					/>
					<YAxis title="Price" />
					{this.renderLines(this.props)}
				</FlexibleWidthXYPlot>
			</div>
    );
	}
}
		


export default Chart;
