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
