import React, { Component } from 'react';
import SomeContext  from "./SomeContext";

class Input extends Component {
    render() {
        console.log('render '+ this.constructor.name);

        return (
            <SomeContext.Consumer>
                {(context) => {
                    console.log('render '+ this.constructor.name +' context');

                    const {
                        changeName,
                        charCount,
                        name,
                    } = context;

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
                }}
            </SomeContext.Consumer>
        );
    }
}

export default Input;
