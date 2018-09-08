import React, { Component } from 'react';
import Input from './Input';
import { withSomeContext } from './SomeContext';

class HeaderSubComponent extends Component {
    render() {
        console.log('render '+ this.constructor.name);

        const InputWithSomeContext = withSomeContext(Input)({});

        return (
            <div className="App-header-subcomponent">
                name input HEADER: { InputWithSomeContext }
            </div>
        );
    }
}

export default HeaderSubComponent;
