import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
    };

    handleInput = (e) => {
        const name = e.target.value;

        this.props.changeName(name);
    };

    render() {
        console.log('render '+ this.constructor.name);
        const {
            charCount,
            name,
        } = this.props;

        return (
            <div className="App-input">
                <div>
                    <input type="input" onChange={this.handleInput} value={name} />
                </div>
                <div>
                    {charCount}
                </div>
            </div>
        );
    }
}

export default Input;
