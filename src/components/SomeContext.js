import React, {Component} from "react";

const SomeContext = React.createContext();

class SomeContextProvider extends Component {
    constructor(props) {
        super(props);

        const { name } = this.props;

        this.state = {
            charCount: name.length,
            name,
        };
    }

    changeName = (name) => {
        this.setState({
            charCount: name.length,
            name,
        });
    };

    render() {
        console.log('render '+ this.constructor.name);

        const contextProps = {
            changeName: this.changeName,
            ...this.state,
        };

        return (
            <SomeContext.Provider value={{...contextProps}}>
                {this.props.children}
            </SomeContext.Provider>
        );
    }
}

export default SomeContext;
export { SomeContextProvider };
