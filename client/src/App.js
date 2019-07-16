import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Home from './components/app/Home';
import { GitHub, Linkedin } from './assets/icons';
import Name from './assets/images/Name';
import './stylesheets/App.scss';
import './stylesheets/name.scss';

const App = () => {
    return (
        <div className="container">
            <div className="landing">
                <div className="landing_name">
                    <NavLink className="landing_name_link" to="/">
                        <Name fill="#fff9fc" />
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
                            <a
                                className="landing_nav_links_current"
                                href="https://github.com/yilinggk"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GitHub
                                    className="icon"
                                    width="1.5em"
                                    height="1.5em"
                                    fill="#fff9fc"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                className="landing_nav_links_current"
                                href="https://www.linkedin.com/in/yiling-kang-066954139/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin
                                    className="icon"
                                    width="1.5em"
                                    height="1.5em"
                                    fill="#fff9fc"
                                />
                            </a>
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
