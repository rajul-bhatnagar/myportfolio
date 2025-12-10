
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled]);

    return (
        <nav className={`navbar-glass ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-container">
                <NavLink to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
                    Rajul Bhatnagar<span className="dot">.</span>
                </NavLink>

                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-links" onClick={toggleMenu}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-links" onClick={toggleMenu}>
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/skills" className="nav-links" onClick={toggleMenu}>
                            Skills
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/experience" className="nav-links" onClick={toggleMenu}>
                            Experience
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects" className="nav-links" onClick={toggleMenu}>
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-links" onClick={toggleMenu}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
