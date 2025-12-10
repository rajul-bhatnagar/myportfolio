
import React from "react";
import resumeData from "../data/resumeData";

const Skills = () => {
    return (
        <div className="skills-container container">
            <h2 className="section-title animate__animated animate__fadeIn">Technical Skills</h2>
            <div className="skills-grid animate__animated animate__fadeInUp">
                {resumeData.skills.map((skillCategory, index) => (
                    <div key={index} className="skill-category card">
                        <h3 className="category-title">{skillCategory.title}</h3>
                        <div className="skill-items">
                            {skillCategory.items.map((item, i) => (
                                <span key={i} className="skill-tag">{item}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
