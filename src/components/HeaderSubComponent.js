import React, { Component } from 'react';
import Input from './Input';

class HeaderSubComponent extends Component {
    render() {
        console.log('render '+ this.constructor.name);
        return (
            <div className="App-header-subcomponent">
                name input MAIN: <Input {...this.props} />
            </div>
        );
    }
}

export default HeaderSubComponent;
