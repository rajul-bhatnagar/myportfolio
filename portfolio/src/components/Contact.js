
import React from "react";
import resumeData from "../data/resumeData";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="contact-container container">
            <h2 className="section-title animate__animated animate__fadeIn">Get In Touch</h2>
            <div className="contact-content animate__animated animate__fadeInUp">
                <div className="contact-info card">
                    <p className="contact-message">{resumeData.contact.message}</p>
                    <div className="contact-methods">
                        {resumeData.contact.email && (
                            <a href={`mailto:${resumeData.contact.email}`} className="contact-link">
                                <FaEnvelope /> <span>{resumeData.contact.email}</span>
                            </a>
                        )}
                        {resumeData.contact.linkedin && (
                            <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                                <FaLinkedin /> <span>LinkedIn</span>
                            </a>
                        )}
                        {resumeData.contact.github && (
                            <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                                <FaGithub /> <span>GitHub</span>
                            </a>
                        )}
                    </div>
                </div>

                <form className="contact-form card">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
