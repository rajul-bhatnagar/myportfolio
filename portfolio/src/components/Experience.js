
import React from "react";
import resumeData from "../data/resumeData";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
    return (
        <div className="experience-container container">
            <h2 className="section-title animate__animated animate__fadeIn">Professional Experience</h2>
            <div className="timeline animate__animated animate__fadeInUp">
                {resumeData.experience.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-icon">
                            <FaBriefcase />
                        </div>
                        <div className="timeline-content card">
                            <span className="date">{exp.dates}</span>
                            <h3 className="role">{exp.role}</h3>
                            <h4 className="company">{exp.company}</h4>
                            <p className="location">{exp.location}</p>
                            <ul className="achievements">
                                {exp.achievements.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
