import React, { Component } from 'react';
import SearchBar from './SearchBar';
import api from '../../helpers/api';
import {
	withRouter
} from 'react-router-dom';

class SearchBarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }
    
    handleSubmit = async (e) => {
        e.preventDefault();
        const data = await api.getMovieByTitle(this.state.value);
        this.props.history.push(`/info/${data.imdbID}`)
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

export default withRouter(SearchBarContainer);
