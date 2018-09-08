import React, { Component } from 'react';

class Input extends Component {
    render() {
        console.log('render '+ this.constructor.name);

        const {
            changeName,
            charCount,
            name,
        } = this.props;

        return (
            <div className="App-input">
                <div>
                    <input
                        type="input"
                        onChange={e => changeName(e.target.value)}
                        value={name}
                    />
                </div>
                <div>
                    {charCount}
                </div>
            </div>
        );
    }
}

export default Input;
