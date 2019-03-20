import React, { Component } from 'react';
import Info from './Info';
import api from '../../../helpers/api';

class InfoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    async componentDidMount() {
        const data = await api.getMovieById(this.props.match.params.id);
        this.setState({data: data})
        console.log(data);
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
            <Info
                handleClick={this.handleClick}
                data={this.state.data}
            />
        );
    }
}

export default InfoContainer;
