import React, { Component } from 'react';
import CardMovie from './CardMovie';

class CardMovieContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            like: false,
            colorLike: "grey",
            watched: false,
            colorWatched: "grey"
        };
    }
    handleClickLike = (e) => {
        e.preventDefault();
        if(!this.state.like){
            this.setState({
                colorLike: "#C03A2B",
                like: true
            });
        }
        else {
            this.setState({
                colorLike: "grey",
                like: false
            });
        };
    };

    handleClickWatched = (e) => {
        e.preventDefault();
        if(!this.state.watched){
            this.setState({
                colorWatched: "#014CB7",
                watched: true
            });
        }
        else {
            this.setState({
                colorWatched: "grey",
                watched: false
            });
        }
    };

    // componentWillUpdate() {
    //     this.setState({
    //         data: this.props.data
    //     });
    //   }

    render(props) {
        console.log('hello : ',this.props.data);
        return (
            <CardMovie
                data={this.props.data}
                id={this.props.id}
                key={this.props.id}
                poster={this.props.poster}
                title={this.props.title}
                rating={this.props.rating}
                genre={this.props.genre}
                handleClickLike={this.handleClickLike}
                handleClickWatched={this.handleClickWatched}
                colorLike={this.state.colorLike}
                colorWatched={this.state.colorWatched}
            />
        );
    }
}

export default CardMovieContainer;
