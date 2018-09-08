import React, { Component } from 'react';
import Input from './Input';

class MainSubComponent extends Component {
    render() {
        console.log('render '+ this.constructor.name);
        return (
            <div className="App-header-subcomponent">
                name input MAIN: <Input />
            </div>
        );
    }
}

export default MainSubComponent;
