import React, { Component } from 'react';
import Home from './Home';
import api from '../../../helpers/api';

class HomeContainer extends Component {
    handleClick = async () =>{
        console.log("allo");
        const data = await api.getBoxOffice();
        console.log(data);
    }
    render() {
        return (
            <Home
                handleClick={this.handleClick}
            />
        );
    }
}

export default HomeContainer;
