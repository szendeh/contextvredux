# Context v Redux (v props)

Some basic examples of how React can handle application state/context.

## Setup

Just run '''yarn''' then '''npm start'''

I used node 9.x for this.

Each branch is an example of a different method of keeping state in an app.

## Methods/branches
### master
- Initial state is passed down through props of all intermediary components.
- State is kept in the input component--components do not share state.
- Updates to one input update the state of that component, causing it alone to re-render.

### lift-state
- Initial state is passed down through props of all intermediary components.
- State is kept in common root component (App) of the various components that need to share state.
- Changes to this common state are passed down through props of all intermediary components.
- Changes to state are set by a handler that is passed down through the props as well.
- Updates to one input update the common state, which pushes new props to all components--all child components are re-rendered.

### context
- Initial state is passed via props to new context component that wraps the App via a "context provider".
- Changes to common state are passed to any component that
    1. is a child of the context provider and
    2. impliments a context consumer
- Changes to state are set by a handler that is passed down through the context consumer as well.
- Updates to one input update the context component state, which pushes new context prop to all components that have implimented the consumer context--only those components are re-rendered.
- Consumer components (the inputs in this case) are more complicated than before, because of the added logic of the consumer.

### with-context
Identical in behavior as 'context' above, except:
- Context component now provides a function 'with[x]Context'.
- When building a component that will read/share the context state in a parent component, you use the 'with' context function to wrap the consumer component. This give the consumer component:
    1. the props provided to it by its parent and
    2. the props provided by the context component (as props, not wrapped in a context object).
- Consumer components are simplified compared to above, because they now simply take in props. Complexity is mostly in the context component.

### redux
- Initial state is passed via 'store' prop into redux Provider component that wraps the App
- store object also takes one or more 'reducers' that listen for actions from connected components and update the store state based on the action type and value provided
- consumer components (the inputs) are wrapped in 'container' components, that connect the component to the store by providing:
    1. updates from the store state to the consumer components via props
    2. updates to the store from the consumer components via dispatch(ed) handlers
- Consumer components are very greatly simplified, as the builk of the logic is contained in the container components and in the reducers provided to the store
