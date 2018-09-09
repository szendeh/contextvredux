import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reducer from './reducers';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const initialName = 'solh is great'; // gotten from somewhere awesome, no doubt
const initialStore = {
    charCount: initialName.length,
    name: initialName,
};

const store = createStore(
    reducer,
    initialStore,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
    <Provider store={store}>
        <App initialName={initialName} />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
