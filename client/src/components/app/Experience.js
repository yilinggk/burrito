import React from 'react';
import '../../stylesheets/app/resumeContent.scss';

const Experience = props => {
    const { position, companyDate, location, skills, details } = props;

    return (
        <div className="resumeContent_experience_container">
            <div className="resumeContent_experience_container_position">{position}</div>
            <div className="resumeContent_experience_container_companyDate">{companyDate}</div>
            <div className="resumeContent_experience_container_location">{location}</div>
            <div className="resumeContent_experience_container_skills">
                <b>Skills:</b>&nbsp;{skills}
            </div>
            <div className="resumeContent_experience_container_details">
                <ul className="resumeContent_experience_container_details_list">
                    {details.map(value => {
                        return (
                            <li className="resumeContent_experience_container_details_list_item">
                                {value}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Experience;
