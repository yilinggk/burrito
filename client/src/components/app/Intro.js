import React, { Component } from 'react';
import '../../stylesheets/app/intro.scss';

class Intro extends Component {
    componentDidMount() {
        const greeting = document.getElementById('greeting');
        const info = document.getElementById('info');

        const fadeInOut = element => {
            element.style.opacity = window.scrollY / 250;
        };

        window.onscroll = () => {
            fadeInOut(greeting);
            fadeInOut(info);
        };
    }

    render() {
        const { introRef } = this.props;

        return (
            <div className="intro" id="intro" ref={introRef}>
                <div className="intro__greeting" id="greeting">
                    hey everyone!
                </div>
                <div className="intro__info" id="info">
                    I&apos;m Yiling, a full-stack developer and designer currently based in
                    Vancouver, Canada. <br />
                    <br />I am looking for a <b>4 or 8 month</b> software development co-op or
                    intership position starting <b>January 2020</b>!
                </div>
            </div>
        );
    }
}

export default Intro;
