import React, { Component } from 'react';
import CardMovie from './CardMovie';
import localstorage from '../../helpers/localstorage';

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
            localstorage.addToLocalStorage('likeList',this.props.data);
            console.log('LIKE LIST :',localstorage.getLikeList());
            this.setState({
                colorLike: "#C03A2B",
                like: true
            });
        }
        else {
            localstorage.deleteFromLocalStorage('likeList',this.props.data);
            console.log('LIKE LIST :',localstorage.getLikeList());
            this.setState({
                colorLike: "grey",
                like: false
            });
        };
    };

    handleClickWatched = (e) => {
        e.preventDefault();
        if(!this.state.watched){
            localstorage.addToLocalStorage('watchedList',this.props.data);
            console.log('WATCHED LIST :',localstorage.getWatchedList());
            this.setState({
                colorWatched: "#014CB7",
                watched: true
            });
        }
        else {
            localstorage.deleteFromLocalStorage('watchedList',this.props.data);
            console.log('WATCHED LIST :',localstorage.getWatchedList());
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
