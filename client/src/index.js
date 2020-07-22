import 'react-app-polyfill/ie11';
import '../polyfills';
import smoothscroll from 'smoothscroll-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './stylesheets/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root'),
);

smoothscroll.polyfill();
module.hot.accept();
serviceWorker.unregister();
