import 'react-app-polyfill/ie11';
import '../polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import './stylesheets/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root'),
);

module.hot.accept();
serviceWorker.unregister();
