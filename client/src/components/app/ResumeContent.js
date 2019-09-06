import React, { Component } from 'react';
import Experience from './Experience';
import '../../stylesheets/app/resumeContent.scss';

class ResumeContent extends Component {
    componentDidMount() {
        const content = document.getElementById('content');

        const fadeInOut = element => {
            // eslint-disable-next-line no-param-reassign
            element.style.opacity = window.scrollY / 250;
        };

        window.onscroll = () => {
            //    fadeInOut(resume);
            fadeInOut(content);
        };
    }

    render() {
        const { resumeRef } = this.props;

        return (
            <div className="resumeContent" ref={resumeRef} id="content">
                <div className="resumeContent_skills">
                    <div className="resumeContent_skills_header">here are some of my skills...</div>
                    <div className="resumeContent_skills_content">
                        <div className="resumeContent_skills_content_languages">
                            LANGUAGES
                            <ul className="resumeContent_skills_content_languages_list">
                                <li className="resumeContent_skills_content_languages_list_item">
                                    Python
                                </li>
                                <li className="resumeContent_skills_content_languages_list_item">
                                    JavaScript
                                </li>
                                <li className="resumeContent_skills_content_languages_list_item">
                                    Java
                                </li>
                                <li className="resumeContent_skills_content_languages_list_item">
                                    C/C++
                                </li>
                                <li className="resumeContent_skills_content_languages_list_item">
                                    php
                                </li>
                                <li className="resumeContent_skills_content_languages_list_item">
                                    HTML
                                </li>
                                <li className="resumeContent_skills_content_languages_list_item">
                                    Assembly
                                </li>
                            </ul>
                        </div>
                        <div className="resumeContent_skills_content_languages">
                            FRONTEND
                            <ul className="resumeContent_skills_content_languages_list">
                                <li className="resumeContent_skills_content_languages_list_item">
                                    React.js
                                </li>
                                <li className="resumeContent_skills_content_languages_list_item">
                                    Angular
                                </li>
                                <li className="resumeContent_skills_content_languages_list_item">
                                    jQuery
                                </li>
                                <li className="resumeContent_skills_content_languages_list_item">
                                    Webpack
                                </li>
                            </ul>
                        </div>
                        <div className="resumeContent_skills_content_languages">
                            BACKEND
                            <ul className="resumeContent_skills_content_languages_list">
                                <li className="resumeContent_skills_content_languages_list_item">
                                    Node.js
                                </li>
                                <li className="resumeContent_skills_content_languages_list_item">
                                    Flask
                                </li>
                                <li className="resumeContent_skills_content_languages_list_item">
                                    Express
                                </li>
                                <li className="resumeContent_skills_content_languages_list_item">
                                    AJAX
                                </li>
                                <li className="resumeContent_skills_content_languages_list_item">
                                    Postgres
                                </li>
                                <li className="resumeContent_skills_content_languages_list_item">
                                    MySQL
                                </li>
                                <li className="resumeContent_skills_content_languages_list_item">
                                    MongoDB
                                </li>
                                <li className="resumeContent_skills_content_languages_list_item">
                                    Apache Hive
                                </li>
                            </ul>
                        </div>
                        <div className="resumeContent_skills_content_languages">
                            SERVICES/OPERATING SYSTEMS
                            <ul className="resumeContent_skills_content_languages_list">
                                <li className="resumeContent_skills_content_languages_list_item">
                                    NGINX
                                </li>
                                <li className="resumeContent_skills_content_languages_list_item">
                                    AWS
                                </li>
                                <li className="resumeContent_skills_content_languages_list_item">
                                    Windows
                                </li>
                                <li className="resumeContent_skills_content_languages_list_item">
                                    Ubuntu
                                </li>
                                <li className="resumeContent_skills_content_languages_list_item">
                                    Linux
                                </li>
                                <li className="resumeContent_skills_content_languages_list_item">
                                    Docker
                                </li>
                                <li className="resumeContent_skills_content_languages_list_item">
                                    Tableau
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="resumeContent_experience">
                    <div className="resumeContent_experience_header">
                        ...and this is my experience
                    </div>
                    <Experience
                        position="Software Development Co-op"
                        companyDate="Imprint Plus, May 2019 - August 2019"
                        location="Richmond, BC"
                        skills="Javascript, php, Node.js, Express, React, Angular, NGINX, AWS, MySQL,
                                Docker"
                        details={[
                            'Built full-stack web application with a Node.js backend and React.js frontend from scratch to deployment to automate repetitive tasks and save up to 5 hours of time daily',
                            'Wrote backend RESTful API to store and retrieve data from MySQL database',
                            'Utilized AWS S3 Buckets and Cloudfront to save and serve user dynamic files',
                            'Deployed backend application to Ubuntu AWS EC2 instance via AWS CodePipeline and served frontend static files using NGINX routing',
                        ]}
                    />
                    <Experience
                        position="Data Analytics Co-op"
                        companyDate="Schneider Electric, September 2018 - December 2018"
                        location="Burnaby, BC"
                        skills="Python, Postgres, Apache Hive, Tableau, MATLAB, SQL"
                        details={[
                            'Designed Python algorithms and integrated SQL queries with object oriented programming to optimize inverter maintenance costs',
                            'Created Python script that automatically generates monthly customer reports that highlight inverter health using tables and metrics',
                            'Wrote regression tests with Python to test development frameworks',
                            'Used Tableau Server, Desktop, and Prep to sort and present millions of rows of raw data to technical and non-technical audiences',
                        ]}
                    />
                    <Experience
                        position="Research Assistant"
                        companyDate="UBC Mechanical Engineering, May 2018 - September 2018"
                        location="Burnaby, BC"
                        skills="MATLAB, Excel VBA"
                        details={[
                            'Applied computer vision and image processing tools in MATLAB to distinguish particle images from the background to determine the size and morphology of oil and gas flare particles',
                            'Researched and applied knowledge to create a 3D reconstructed model of a soot particle from 2D electron microscope images',
                            'Analyzed over hundreds of lines of data in Excel with VBA, advanced functions, and pivot tables to find trends in the morphology of soot particles',
                            'Contributions and results from work term were published into official research paper: "Electron tomography of soot for validation of 2-D image processing and observation of new structural features"',
                        ]}
                    />
                </div>
                <div className="resumeContent_contact">
                    <div className="resumeContent_contact_header">
                        I would love to hear any inquiries or questions!
                    </div>
                    <div className="resumeContent_contact_email">
                        <b>Email me</b>&nbsp;at&nbsp;
                        <a
                            className="resumeContent_contact_email_link"
                            href="mailto:yiling2kang@gmail.com"
                        >
                            yiling2kang@gmail.com
                        </a>
                    </div>
                    <div className="resumeContent_contact_linkedin">
                        ... or <b>message</b> me on{' '}
                        <a
                            className="resumeContent_contact_linkedin_link"
                            href="https://www.linkedin.com/in/yiling-kang-066954139/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResumeContent;
