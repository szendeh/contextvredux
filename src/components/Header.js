import React, { Component } from 'react';
import HeaderSubComponent from './HeaderSubComponent';

class Header extends Component {
    render() {
        console.log('render '+ this.constructor.name);
        return (
            <header className="App-header">
                <h1>Welcome to Context v. Redux... Redux!</h1>
                <HeaderSubComponent />
            </header>
        );
    }
}

export default Header;
