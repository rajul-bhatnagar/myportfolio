
import React from "react";
import { Link } from "react-router-dom";
import resumeData from "../data/resumeData";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Home = () => {
    return (
        <div className="home-container">
            <div className="hero-content animate__animated animate__fadeIn">
                <h2 className="greeting">Hello, I'm</h2>
                <h1 className="name">{resumeData.contact.name}</h1>
                <h3 className="role">Full Stack Developer</h3>
                <p className="summary-text animate__animated animate__fadeInUp">
                    {resumeData.summary.split(".")[0]}.
                </p>

                <div className="cta-container animate__animated animate__fadeInUp">
                    <Link to="/projects" className="btn btn-primary">
                        View My Work
                    </Link>
                    <Link to="/contact" className="btn btn-outline">
                        Contact Me
                    </Link>
                </div>

                <div className="social-links animate__animated animate__fadeInUp">
                    {resumeData.contact.github && (
                        <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    )}
                    {resumeData.contact.linkedin && (
                        <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    )}
                    <a href={`mailto:${resumeData.contact.email || "example@email.com"}`}>
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
