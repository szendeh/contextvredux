import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
    render() {
        console.log('render '+ this.constructor.name);

        return (
            <div className="App">
                <Header />
                <Main />
            </div>
        );
    }
}

export default App;
