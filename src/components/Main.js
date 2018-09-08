import React, { Component } from 'react';
import MainSubComponent from './MainSubComponent';

class Main extends Component {
    render() {
        console.log('render '+ this.constructor.name);
        return (
            <div className="App-main">
                <h1>main this thing</h1>
                <MainSubComponent />
            </div>
        );
    }
}

export default Main;
