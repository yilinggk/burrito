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
                    <div className="resume_heading_text">A LITTLE MORE ME...</div>
                    <div className="resume_heading_download">
                        <a
                            className="resume_heading_download_button"
                            href="https://www.dropbox.com/sh/2h7nvw1bef21h1d/AABGVwdTfDh-E5w2INr2paLca?dl=0"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            DOWNLOAD RESUME
                        </a>
                    </div>
                </div>
                <div className="nextButton">
                    <button
                        className="nextButton_svg"
                        type="button"
                        onClick={() => scrollToIntro()}
                        onMouseDown={e => e.preventDefault()}
                    >
                        <Next width="2.6em" height="2.6em" viewBox="0 0 129 129" fill="#2a2a2a" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Resume;
