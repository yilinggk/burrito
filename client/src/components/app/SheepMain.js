import React, { Component } from 'react';
import '../../stylesheets/app/intro.scss';

class SheepMain extends Component {
    componentDidMount() {
        const sheepGame = document.getElementById('sheepGame');

        const fadeInOut = element => {
            // eslint-disable-next-line no-param-reassign
            element.style.opacity = window.scrollY / 250;
        };

        window.onscroll = () => {
            fadeInOut(sheepGame);
        };
    }

    render() {
        const { sheepRef } = this.props;

        return (
            <div className="sheepGame" id="sheepGame" ref={sheepRef}>
                <div className="sheepGame__placeholder" id="placeholder">
                    yiling&apos;s sheep minigame <br /> <br />
                    coming soon!!
                </div>
            </div>
        );
    }
}

export default SheepMain;
