import React, { Component } from 'react';
import Info from './Info';
import api from '../../../helpers/api';

class InfoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            id: ""
        };
    }

    async componentDidMount() {
        const data = await api.getMovieById(this.props.match.params.id);
        this.setState({
            data: data,
            id: this.props.match.params.id
        })
        console.log(data);
        //console.log(dataOmdb);
        //console.log(dataTrakt[0]);
        //console.log(dataTrakt[0].movie.ids.imdb);
    }
    async componentDidUpdate() {
        if(this.props.match.params.id !== this.state.id){
            const data = await api.getMovieById(this.props.match.params.id);
            this.setState({
                data: data,
                id: this.props.match.params.id
            });
        }
        
        //console.log(dataOmdb);
        //console.log(dataTrakt[0]);
        //console.log(dataTrakt[0].movie.ids.imdb);
    }

    render() {
        return (
            <Info
                handleClick={this.handleClick}
                data={this.state.data}
            />
        );
    }
}

export default InfoContainer;
