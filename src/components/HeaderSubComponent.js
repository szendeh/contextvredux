import React, { Component } from 'react';
import Input from '../containers/Input';

class HeaderSubComponent extends Component {
    render() {
        console.log('render '+ this.constructor.name);
        return (
            <div className="App-header-subcomponent">
                name input HEADER: <Input />
            </div>
        );
    }
}

export default HeaderSubComponent;
