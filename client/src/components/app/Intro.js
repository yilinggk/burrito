import React, { Component } from 'react';
import FemaleSide from '../../assets/images/FemaleSide';
import '../../stylesheets/app/homeElem.scss';

class Intro extends Component {
    componentDidMount() {
        const greeting = document.getElementById('greeting');
        const info = document.getElementById('info');

        const fadeInOut = element => {
            // eslint-disable-next-line no-param-reassign
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
            <div className="introContainer" ref={introRef}>
                <div className="femaleSide">
                    <FemaleSide />
                </div>
                <div className="intro" id="intro">
                    <div className="intro__greeting" id="greeting">
                        hi there!
                    </div>
                    <div className="intro__info" id="info">
                        I&apos;m Yiling, a full-stack developer and designer currently based in
                        Vancouver, Canada. I love doing digital art and incorporating my art into my
                        website designs. Most of the graphics and icons used in this site are
                        self-drawn. <br />
                    </div>
                </div>
            </div>
        );
    }
}

export default Intro;
