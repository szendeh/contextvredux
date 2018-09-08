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

export function withSomeContext(ConsumerComponent) {
    return (props) => {
        return (
            <SomeContext.Consumer key={props.key}>
                {(context) => {
                    const combinedProps = { ...props, ...context };
                    return <ConsumerComponent {...combinedProps} />;
                }}
            </SomeContext.Consumer>
        );
    };
}

export default SomeContext;
export { SomeContextProvider };
