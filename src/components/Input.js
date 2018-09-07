import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);

        const { name } = this.props;

        this.state = {
            charCount: name.length,
            name,
        };
    }

    handleInput = (e) => {
        const name = e.target.value;

        this.setState({
            charCount: name.length,
            name,
        });
    };

    render() {
        console.log('render '+ this.constructor.name);
        const {
            charCount,
            name,
        } = this.state;

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
