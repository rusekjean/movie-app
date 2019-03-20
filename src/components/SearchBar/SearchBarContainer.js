import React, { Component } from 'react';
import SearchBar from './SearchBar';

class SearchBarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.value);
    }
    handleChange = (e)  => {
        this.setState({value: e.target.value});
        console.log(this.state.value);
    }
    render() {
        return (
            <SearchBar
                value={this.state.value}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        );
    }
}

export default SearchBarContainer;
