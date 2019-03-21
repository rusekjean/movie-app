import React, { Component } from 'react';
import Home from './Home';
import api from '../../../helpers/api';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataBoxOffice: [],
            dataPopular: []
        };
    }

    async componentDidMount() {
        let dataTrakt01 = await api.getBoxOffice();
        let dataB = [];
        for (let i = 0; i < 6; i++) {
            let dataOmdb = await api.getMovieById(dataTrakt01[i].movie.ids.imdb);
            dataB.push(dataOmdb);
        }
        console.log('first call');
        this.setState({dataBoxOffice: dataB})
        console.log('first call');
        //console.log(dataM);
        //console.log(dataOmdb);
        //console.log(dataTrakt[0]);
        //console.log(dataTrakt[0].movie.ids.imdb);

        let dataTrakt02 = await api.getPopular();
        let dataP = [];
        for (let i = 0; i < 10; i++) {
            let dataOmdb = await api.getMovieById(dataTrakt02[i].ids.imdb);
            dataP.push(dataOmdb);
        }
        console.log('second call');
        this.setState({dataPopular: dataP})
        //console.log(dataM);
        //console.log(dataOmdb);
        //console.log(dataTrakt[0]);
        //console.log(dataTrakt[0].movie.ids.imdb);
    }

    handleClick = async () =>{
        const dataTrakt = await api.getPopular();
        let dataM = [];
        for (let i = 0; i < 3; i++) {
            let dataOmdb = await api.getMovieById(dataTrakt[i].ids.imdb);
            dataM.push(dataOmdb);
        }
    }

    render() {
        console.log(this.state.dataPopular);
    
        return (
            <Home
                key="1"
                handleClick={this.handleClick}
                dataBoxOffice={this.state.dataBoxOffice}
                dataPopular={this.state.dataPopular}
            />
        );
    }
}

export default HomeContainer;
