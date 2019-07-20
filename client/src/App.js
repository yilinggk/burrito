import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Home from './components/app/Home';
import { GitHub, Linkedin } from './assets/icons';
import Name from './assets/images/Name';
import './stylesheets/App.scss';
import './stylesheets/name.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showName: true,
        };

        this.renderName = this.renderName.bind(this);
    }

    renderName() {
        this.setState(
            {
                showName: false,
            },
            () => {
                this.setState({
                    showName: true,
                });
            },
        );
    }

    render() {
        const { showName } = this.state;

        return (
            <div className="container">
                <div className="landing">
                    <div className="landing_name">
                        <NavLink
                            className="landing_name_link"
                            onMouseEnter={this.renderName}
                            to="/"
                        >
                            {showName ? <Name fill="#fff9fc" /> : null}
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
    }
}

export default App;
