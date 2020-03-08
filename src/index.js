import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Navigation from './Components/Navigation/Navigation'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import Intro from './Pages/Intro'
import 'tachyons';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker();
