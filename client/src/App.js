import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Resume, Header, Footer } from './components/app';
import './stylesheets/App.scss';
import './stylesheets/name.scss';

export default function App() {
    return (
        <div className="container">
            <Header />

            <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/resume" component={Resume} />
            </div>
            <Footer />
        </div>
    );
}
