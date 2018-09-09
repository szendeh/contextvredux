import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const initialName = 'solh is great'; // gotten from somewhere awesome, no doubt

ReactDOM.render(<App initialName={initialName} />, document.getElementById('root'));
registerServiceWorker();
