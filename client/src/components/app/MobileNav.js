import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../stylesheets/App.scss';

export default function MobileNav() {
    const handleClose = () => {
        document.getElementById('mobileNav').style.width = '0%';
    };

    return (
        <div className="mobileNav" id="mobileNav">
            <div className="mobileNav_close">
                <button
                    type="button"
                    className="mobileNav_close_button"
                    onClick={() => handleClose()}
                >
                    &times;
                </button>
            </div>
            <div className="mobileNav_content">
                <NavLink
                    onClick={() => handleClose()}
                    className="mobileNav_content_links"
                    to="/resume"
                >
                    resume
                </NavLink>
                <NavLink onClick={() => handleClose()} className="mobileNav_content_links" to="/">
                    contact
                </NavLink>
                <a
                    className="mobileNav_content_links"
                    onClick={() => handleClose()}
                    href="https://github.com/yilinggk"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    github
                </a>
                <a
                    className="mobileNav_content_links"
                    onClick={() => handleClose()}
                    href="https://www.linkedin.com/in/yiling-kang-066954139/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    linkedin
                </a>
            </div>
        </div>
    );
}
