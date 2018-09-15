import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {render() {
        console.log('render '+ this.constructor.name);

        const { initialName: name } = this.props;

        const componentProps = {
            charCount: name.length,
            name,
        };

        return (
            <div className="App">
                <Header {...componentProps} />
                <Main {...componentProps} />
            </div>
        );
    }
}

export default App;
