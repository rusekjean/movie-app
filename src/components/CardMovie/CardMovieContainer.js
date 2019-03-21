import React, { Component } from 'react';
import CardMovie from './CardMovie';

class CardMovieContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    
    render(props) {
        console.log(this.state.data)
        return (
            <CardMovie
                data={this.props.data}
                id={this.props.id}
                key={this.props.id}
                poster={this.props.poster}
                title={this.props.title}
                rating={this.props.rating}
                genre={this.props.genre}
            />
        );
    }
}

export default CardMovieContainer;
