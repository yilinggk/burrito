import React, { createRef } from 'react';

import { Next } from '../../assets/icons';

import '../../stylesheets/app/resume.scss';

const Resume = () => {
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
            <div className="resume" id="resume">
                <div className="resume_heading">
                    <div className="resume_heading_text">RESUME</div>
                </div>
                <div className="nextButton">
                    <button
                        className="nextButton_svg"
                        type="button"
                        onClick={() => scrollToIntro()}
                        onMouseDown={e => e.preventDefault()}
                    >
                        <Next width="1.5em" height="1.5em" viewBox="0 0 129 129" fill="#2a2a2a" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Resume;
