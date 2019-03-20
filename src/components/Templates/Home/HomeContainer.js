import React, { Component } from 'react';
import Home from './Home';
import api from '../../../helpers/api';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    async componentDidMount() {
        const dataTrakt = await api.getBoxOffice();
        const dataM = [];
        for (let i = 0; i < 3; i++) {
            let dataOmdb = await api.getMovieById(dataTrakt[i].movie.ids.imdb);
            dataM.push(dataOmdb);
        }
        this.setState({data: dataM})
        //console.log(dataM);
        //console.log(dataOmdb);
        //console.log(dataTrakt[0]);
        //console.log(dataTrakt[0].movie.ids.imdb);
    }

    handleClick = async () =>{
        const dataTrakt = await api.getBoxOffice();
        const dataM = [];
        for (let i = 0; i < 3; i++) {
            let dataOmdb = await api.getMovieById(dataTrakt[i].movie.ids.imdb);
            dataM.push(dataOmdb);
        }
        this.setState({data: dataM})
        //console.log(dataM);
        //console.log(dataOmdb);
        //console.log(dataTrakt[0]);
        //console.log(dataTrakt[0].movie.ids.imdb);

    }

    render() {
        console.log(this.state.data);
        return (
            <Home
                handleClick={this.handleClick}
                data={this.state.data}
            />
        );
    }
}

export default HomeContainer;
