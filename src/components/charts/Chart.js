import React from 'react';
import PropTypes from 'prop-types';
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
} from 'react-vis';
//import '../node_modules/react-vis/dist/style.css';

export default class Chart extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			crossHairVal:[{x : 0, y: 0}, {x: 0, y: 0}]
		};
	}
	gradient() {
		return (
			<GradientDefs>
				<linearGradient id="borderGradient" gradientUnits="userSpaceOnUse">
					<stop offset="10%" stopColor="#c5cae9" stopOpacity={0.3} />
					<stop offset="33%" stopColor="#9fa8da" stopOpacity={0.3} />
					<stop offset="66%" stopColor="#7986cb" stopOpacity={0.3} />
					<stop offset="90%" stopColor="#3f51b5" stopOpacity={0.3} />
				</linearGradient>
			</GradientDefs>
		);
	}
	render(){
	const data = [
		{x: 0, y: 0},
		{x: 2, y: 3},
		{x: 0, y: 0},
		{x: 0, y: 0},
		{x: 0, y: 0},
		{x: 0, y: 0},
		{x: 0, y: 0},
		{x: 0, y: 0},
		{x: 0, y: 0},
		{x: 0, y: 0}
	  ];
	  return (
		<div className="App">
		  <XYPlot height={500} width={500}>
			<LineSeries data={data} />
		  </XYPlot>
		</div>
	  );
	}
}
