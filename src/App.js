import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { SomeContextProvider } from "./components/SomeContext";

class App extends Component {
    render() {
        console.log('render '+ this.constructor.name);

        const { initialName } = this.props;

        return (
            <SomeContextProvider name={initialName}>
                <div className="App">
                    <Header />
                    <Main />
                </div>
            </SomeContextProvider>
        );
    }
}

export default App;
