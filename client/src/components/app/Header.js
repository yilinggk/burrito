/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { GitHub, Linkedin, Menu } from '../../assets/icons';
import Name from '../../assets/images/Name';
import '../../stylesheets/App.scss';
import '../../stylesheets/name.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showName: true,
        };

        this.renderName = this.renderName.bind(this);
    }

    componentDidMount() {
        const header = document.getElementById('header');
        const sticky = header.offsetTop;

        const addSticky = () => {
            if (window.pageYOffset > sticky) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        };

        window.onscroll = () => {
            addSticky();
        };
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

        const handleClick = () => {
            document.getElementById('mobileNav').style.height = '100%';
        };
        return (
            <div className="landing" id="header">
                <div className="landing_name">
                    <NavLink className="landing_name_link" onMouseEnter={this.renderName} to="/">
                        {showName ? <Name fill="#fff9fc" /> : null}
                    </NavLink>
                </div>
                <div className="landingMobile_nav">
                    <button
                        type="button"
                        className="landingMobile_nav_button"
                        onClick={() => handleClick()}
                    >
                        <Menu width="3em" height="3em" fill="#fff9fc" />
                    </button>
                </div>
                <div className="landing_nav">
                    <ul className="landing_nav_links">
                        <li>
                            <NavLink className="landing_nav_links_current" to="/resume">
                                resume
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
        );
    }
}

export default Header;
