import React, {Component} from 'react';
import ChartData from '../components/charts/ChartData';
import SideBar from '../components/SideBar/SideBar';
import Header from './Header';
import './App.css';

class App extends Component {
    constructor(){
        super()
    }
    render(){
        return (
        <div className="app-container">
            <Header/>
            <div className="main-wrapper">
                <ChartData/>
                <SideBar/>
            </div>
        </div>
        )
    }
}

export default App;