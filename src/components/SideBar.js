import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getStock } from '../redux/stock';

export class SideBar extends React.Component {
    constructor(props){
        super(props)
    }
    handleChange(event){
        this.setState({value: event.target.value})
    }
    addStock(event){
        event.preventDefault();
        this.props.getStock(this.state.value)
        this.setState({value: ''})
    }
    render(){
        return (
            <div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    stocks: state.stocks
});

export default connect(mapStateToProps, {getStock})(SideBar);