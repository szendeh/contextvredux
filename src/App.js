import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
    constructor(props) {
        super(props);

        const { initialName } = props;

        this.state = {
            charCount: initialName.length,
            name: initialName,
        };
    }

    changeName = (name) => {
        this.setState({
            charCount: name.length,
            name,
        });
    };

    render() {
        console.log('render '+ this.constructor.name);
        const componentProps = {
            changeName: this.changeName,
            charCount: this.state.charCount,
            name: this.state.name,
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
