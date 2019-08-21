import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Header, Intro } from './components/app';
import './stylesheets/App.scss';
import './stylesheets/name.scss';

export default function App() {
    return (
        <div className="container">
            <Header />

            <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/home/intro" component={Intro} />
            </div>
        </div>
    );
}
