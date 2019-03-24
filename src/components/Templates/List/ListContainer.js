import React, { Component } from 'react';
import List from './List';
import localstorage from '../../../helpers/localstorage';

class ListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataLike: [],
            dataWatched: [],
        };
    }

    async componentDidMount() {
        this.setState({
            dataLike: localstorage.getLikeList(),
            dataWatched: localstorage.getWatchedList()
        })
    }
    
    render() {
        return (
            <List
                dataLike={this.state.dataLike}
                dataWatched={this.state.dataWatched}
            />
        );
    }
}

export default ListContainer;
