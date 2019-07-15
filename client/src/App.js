import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Home from './components/app/Home';
import { GitHub, Linkedin } from './assets/icons';
import './stylesheets/App.scss';

const App = () => {
    return (
        <div className="container">
            <div className="landing">
                <div className="landing_name">
                    <NavLink className="landing_name_link" to="/">
                        yiling&nbsp;kang
                    </NavLink>
                </div>
                <div className="landing_nav">
                    <ul className="landing_nav_links">
                        <li>
                            <NavLink className="landing_nav_links_current" to="/">
                                about
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="landing_nav_links_current" to="/">
                                skills
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="landing_nav_links_current" to="/">
                                resume
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="landing_nav_links_current" to="/">
                                contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="landing_nav_links_current" to="/">
                                <GitHub className="icon" width="1.5em" height="1.5em" />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="landing_nav_links_current" to="/">
                                <Linkedin className="icon" width="1.5em" height="1.5em" />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="content">
                <Route exact path="/" component={Home} />
            </div>
        </div>
    );
};

export default App;
