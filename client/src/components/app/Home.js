import React, { createRef } from 'react';
import Tree from '../../assets/images/Tree';
import { Next } from '../../assets/icons';
import Intro from './Intro';
import SheepMain from './SheepMain';
import '../../stylesheets/app/home.scss';

const Home = () => {
    const introRef = createRef();

    const scrollToIntro = () => {
        window.scrollTo({
            top: introRef.current.offsetTop,
            left: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            <div className="home" id="home">
                <div className="tree">
                    <Tree className="tree_svg" pathClass="tree__path" />
                </div>
                <div className="nextButton">
                    <button
                        className="nextButton_svg"
                        type="button"
                        onClick={() => scrollToIntro()}
                        onMouseDown={e => e.preventDefault()}
                    >
                        <Next width="1.5em" height="1.5em" viewBox="0 0 129 129" />
                    </button>
                </div>
            </div>
            <Intro introRef={introRef} />
        </div>
    );
};

export default Home;
