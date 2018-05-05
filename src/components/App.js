import React, {Component} from 'react';
import ChartData from '../components/charts/ChartData';
import SideBar from '../components/SideBar/SideBar';

import './App.css';

class App extends Component {
    constructor(){
        super()
    }
    render(){
        return (
        <div className="main-wrapper">
            <ChartData/>
            <SideBar/>
        </div>
        )
    }
}

export default App;