import React from 'react';
import { GitHub, Linkedin, Contact } from '../../assets/icons';
import '../../stylesheets/app/footer.scss';

function Footer() {
    return (
        <div className="footer">
            <div className="footer_nav">
                <ul className="footer_nav_links">
                    <li>
                        <a
                            className="landing_nav_links_current"
                            href="mailto:yiling2kang@gmail.com"
                        >
                            <Contact className="icon" width="2em" height="2em" fill="#fff9fc" />
                        </a>
                    </li>
                    <li>
                        <a
                            className="landing_nav_links_current"
                            href="https://github.com/yilinggk"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHub className="icon" width="1.5em" height="1.5em" fill="#fff9fc" />
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
            <div className="footer_text">
                &#9400; Yiling Kang 2020 <br />
                All Rights Reserved.
            </div>
        </div>
    );
}

export default Footer;
