import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Home from './components/app/Home';
import './stylesheets/App.scss';

const App = () => {
    console.log('what is going on');
    return (
        <div className="container">
            <div className="landing">
                <ul className="nav">
                    <li className="current">
                        <NavLink to="/">home</NavLink>
                    </li>
                </ul>
            </div>

            <div className="content">
                <Route exact path="/" component={Home} />
            </div>
        </div>
    );
};

export default App;
