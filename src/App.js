import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

const initialName = 'solh is great'; // gotten from somewhere awesome, no doubt

class App extends Component {
    render() {
        console.log('render '+ this.constructor.name);
        return (
            <div className="App">
                <Header name={initialName} />
                <Main name={initialName} />
            </div>
        );
    }
}

export default App;
