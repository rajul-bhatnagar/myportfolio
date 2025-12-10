
import React from "react";
import resumeData from "../data/resumeData";
import { FaCode } from "react-icons/fa";

const Projects = () => {
    return (
        <div className="projects-container container">
            <h2 className="section-title animate__animated animate__fadeIn">Projects</h2>
            <div className="projects-grid animate__animated animate__fadeInUp">
                {resumeData.projects.map((project, index) => (
                    <div key={index} className="project-card card">
                        <div className="card-header">
                            <FaCode className="project-icon" />
                            <h3 className="project-title">{project.title}</h3>
                            <span className="project-date">{project.period}</span>
                        </div>
                        <div className="card-body">
                            <p className="project-overview">{project.overview}</p>
                            <div className="tech-stack">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                            <ul className="project-details-list">
                                {project.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
