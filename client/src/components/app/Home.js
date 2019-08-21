import React from 'react';
import Tree from '../../assets/images/Tree';
import { Next } from '../../assets/icons';
import Intro from './Intro';
import '../../stylesheets/app/home.scss';

const Home = () => {
    return (
        <div>
            <div className="home">
                <div className="tree">
                    <Tree className="tree_svg" pathClass="tree__path" />
                </div>
                <div className="nextButton">
                    <Next
                        className="nextButton_svg"
                        width="3em"
                        height="3em"
                        viewBox="0 0 129 129"
                    />
                </div>
            </div>
            <Intro />
        </div>
    );
};

export default Home;
