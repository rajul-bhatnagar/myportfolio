import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "./App.scss";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import { FaPhone, FaRegFileAlt, FaHeartbeat } from "react-icons/fa";

const About = lazy(() => import("../src/components/About.js"));
const Home = () => (
  <div className="container text-center my-5">
    <h1 className="animate__animated animate__fadeIn text-light">
      Welcome to My Portfolio
    </h1>
    <p className="animate__animated animate__fadeInUp text-light">
      Hi, I'm Rajul Bhatnagar, a software engineer specializing in full-stack
      development.
    </p>
    <p className="animate__animated animate__fadeInUp text-light">
      Explore my skills, projects, and experience!
    </p>
  </div>
);



const Skills = () => (
  <div className="container my-5 bg-dark p-5 rounded-3">
    <h2 className="animate__animated animate__slideInLeft text-warning text-center mb-4">
      Technical Skills
    </h2>
    <div className="row text-center">
      <div className="col-md-4 mb-4">
        <div className="card bg-dark text-light border-0 shadow-lg rounded-3">
          <div className="card-body">
            <FaReact size={50} color="#61dafb" />
            <h4 className="card-title mt-3">C++</h4>
            <p className="card-text">
              Object-Oriented Programming language used in systems and
              application development.
            </p>
            <div className="progress" style={{ height: "8px" }}>
              <div
                className="progress-bar bg-info"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card bg-dark text-light border-0 shadow-lg rounded-3">
          <div className="card-body">
            <FaReact size={50} color="#61dafb" />
            <h4 className="card-title mt-3">C#</h4>
            <p className="card-text">
              Modern, object-oriented programming language used in backend
              development.
            </p>
            <div className="progress" style={{ height: "8px" }}>
              <div
                className="progress-bar bg-info"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card bg-dark text-light border-0 shadow-lg rounded-3">
          <div className="card-body">
            <FaReact size={50} color="#61dafb" />
            <h4 className="card-title mt-3">.NET Core</h4>
            <p className="card-text">
              Cross-platform backend framework for building scalable
              applications.
            </p>
            <div className="progress" style={{ height: "8px" }}>
              <div
                className="progress-bar bg-info"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card bg-dark text-light border-0 shadow-lg rounded-3">
          <div className="card-body">
            <FaReact size={50} color="#61dafb" />
            <h4 className="card-title mt-3">ASP.NET MVC</h4>
            <p className="card-text">
              Framework for building dynamic web applications in .NET.
            </p>
            <div className="progress" style={{ height: "8px" }}>
              <div
                className="progress-bar bg-info"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card bg-dark text-light border-0 shadow-lg rounded-3">
          <div className="card-body">
            <FaReact size={50} color="#61dafb" />
            <h4 className="card-title mt-3">React.js</h4>
            <p className="card-text">
              Frontend library for building user interfaces.
            </p>
            <div className="progress" style={{ height: "8px" }}>
              <div
                className="progress-bar bg-info"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card bg-dark text-light border-0 shadow-lg rounded-3">
          <div className="card-body">
            <FaHtml5 size={50} color="#e34f26" />
            <h4 className="card-title mt-3">JavaScript</h4>
            <p className="card-text">
              Programming language for interactive web pages.
            </p>
            <div className="progress" style={{ height: "8px" }}>
              <div
                className="progress-bar bg-danger"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card bg-dark text-light border-0 shadow-lg rounded-3">
          <div className="card-body">
            <FaHtml5 size={50} color="#e34f26" />
            <h4 className="card-title mt-3">HTML5</h4>
            <p className="card-text">Markup language for creating web pages.</p>
            <div className="progress" style={{ height: "8px" }}>
              <div
                className="progress-bar bg-danger"
                style={{ width: "95%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card bg-dark text-light border-0 shadow-lg rounded-3">
          <div className="card-body">
            <FaCss3Alt size={50} color="#1572b6" />
            <h4 className="card-title mt-3">CSS3</h4>
            <p className="card-text">Stylesheets for designing web pages.</p>
            <div className="progress" style={{ height: "8px" }}>
              <div
                className="progress-bar bg-primary"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card bg-dark text-light border-0 shadow-lg rounded-3">
          <div className="card-body">
            <FaNodeJs size={50} color="#339933" />
            <h4 className="card-title mt-3">Node.js</h4>
            <p className="card-text">Backend JavaScript runtime environment.</p>
            <div className="progress" style={{ height: "8px" }}>
              <div
                className="progress-bar bg-success"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card bg-dark text-light border-0 shadow-lg rounded-3">
          <div className="card-body">
            <FaDatabase size={50} color="#4e73df" />
            <h4 className="card-title mt-3">SQL & PostgreSQL</h4>
            <p className="card-text">Relational databases and SQL queries.</p>
            <div className="progress" style={{ height: "8px" }}>
              <div
                className="progress-bar bg-primary"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card bg-dark text-light border-0 shadow-lg rounded-3">
          <div className="card-body">
            <FaGitAlt size={50} color="#f14e32" />
            <h4 className="card-title mt-3">Git</h4>
            <p className="card-text">Version control system for tracking.</p>
            <div className="progress" style={{ height: "8px" }}>
              <div
                className="progress-bar bg-danger"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const WorkExperience = () => {
  return (
    <div className="container my-5">
      <div className="bg-dark text-light rounded-3 shadow-lg p-5">
        <h2 className="animate__animated animate__slideInLeft text-warning mb-4 text-center">
          <span
            style={{ borderBottom: "2px solid #ffc107", paddingBottom: "5px" }}
          >
            Professional Experience
          </span>
        </h2>
        <div className="container my-5 bg-dark text-light p-5 rounded-3 shadow-lg">
          <h5 className="text-warning">Assistant System Engineer</h5>
          <h6 className="text-light fw-semibold">
            MAMSYS CONSULTANCY SERVICES | Noida, Uttar Pradesh
          </h6>
          <p className="text-muted fst-italic mb-3">July 2023 - Present</p>
          <ul className="list-unstyled">
            <li className="mb-3 d-flex align-items-start">
              <i className="fas fa-caret-right text-warning me-3"></i>
              <span>
                Led the development of scalable full-stack applications
                utilizing <b>ASP.NET Core</b>, <b>Entity Framework</b>, and{" "}
                <b>React.js</b>, driving a 20% improvement in operational
                efficiency across key business processes.
              </span>
            </li>
            <li className="mb-3 d-flex align-items-start">
              <i className="fas fa-caret-right text-warning me-3"></i>
              <span>
                Optimized 100+ CRUD operations, achieving a 30% reduction in
                database query execution times, significantly enhancing{" "}
                <b>SQL</b> and <b>PostgreSQL</b> performance.
              </span>
            </li>
            <li className="mb-3 d-flex align-items-start">
              <i className="fas fa-caret-right text-warning me-3"></i>
              <span>
                Developed and integrated RESTful APIs using{" "}
                <b>OOP principles</b> to ensure seamless and secure
                communication between front-end interfaces and back-end systems,
                improving data accuracy and user experience by 25%.
              </span>
            </li>
            <li className="mb-3 d-flex align-items-start">
              <i className="fas fa-caret-right text-warning me-3"></i>
              <span>
                Collaborated closely with cross-functional teams, utilizing{" "}
                <b>Agile methodologies</b> and <b>OOP principles</b>
                to ensure on-time and within-scope project delivery while
                adhering to best coding practices.
              </span>
            </li>
            <li className="d-flex align-items-start">
              <i className="fas fa-caret-right text-warning me-3"></i>
              <span>
                Automated workflows, reducing manual data retrieval by 40% and
                enhancing productivity and resource efficiency.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="container my-5">
      <h2 className="animate__animated animate__slideInLeft text-light text-center mb-5">
        <span
          style={{ borderBottom: "2px solid #ffc107", paddingBottom: "5px" }}
        >
          Projects
        </span>
      </h2>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-light shadow-lg border-0 rounded-3 project-card">
            <div className="card-body text-center">
              <FaPhone size={60} color="#ff4500" />
              <h5 className="card-title mt-3">VC Experience</h5>
              <p className="card-text">
                Multi-platform communication app for calling, SMS, and chat
                (Android, iOS, Web).
              </p>
              {/* Show details directly */}
              <div className="project-details mt-3">
                <h6>Overview:</h6>
                <p>
                  Created a multi-platform communication app for calling, SMS,
                  and chat on Android, iOS, and web.
                  <br />
                  <strong>● Web Admin Development:</strong> Built a web admin
                  interface with .NET MVC, enhancing management capabilities.
                  <br />
                  <strong>● CRUD API Development:</strong> Developed APIs,
                  improving data management and service interaction.
                  <br />
                  <strong>● Performance Optimization:</strong> Reduced latency
                  by 30% and increased efficiency by 25%.
                  <br />
                  <strong>● Client Requirements Handling:</strong> Delivered
                  solutions based on client needs, ensuring high satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-light shadow-lg border-0 rounded-3 project-card">
            <div className="card-body text-center">
              <FaRegFileAlt size={60} color="#ffd700" />
              <h5 className="card-title mt-3">Pantasign</h5>
              <p className="card-text">
                Digital Signature Certificate (DSC) provider application with
                optimized data handling.
              </p>
              {/* Show details directly */}
              <div className="project-details mt-3">
                <h6>Overview:</h6>
                <p>
                  Created a high-performance system for issuing Digital
                  Signature Certificates (DSCs), optimizing data handling.
                  <br />
                  <strong>● CRUD API Development:</strong> Optimized RESTful
                  APIs, boosting efficiency by 35% and data retrieval speed by
                  25%.
                  <br />
                  <strong>● Data Handling & Optimization:</strong> Enhanced data
                  handling by 40%, ensuring high performance under heavy load.
                  <br />
                  <strong>● Code Optimization:</strong> Achieved a 30% reduction
                  in processing time through code refinement.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-light shadow-lg border-0 rounded-3 project-card">
            <div className="card-body text-center">
              <FaHeartbeat size={60} color="#32cd32" />
              <h5 className="card-title mt-3">Tutoplast Application</h5>
              <p className="card-text">
                Healthcare app focused on RTI modernization and improving data
                management.
              </p>
              {/* Show details directly */}
              <div className="project-details mt-3">
                <h6>Overview:</h6>
                <p>
                  Developed a healthcare app for RTI Modernization, enhancing
                  data management and user experience.
                  <br />
                  <strong>● RESTful API Development:</strong> Improved data
                  retrieval by 40% and productivity by 30%.
                  <br />
                  <strong>● Optimization & Performance:</strong> Increased
                  performance by 25% and reduced server response times by 20%.
                  <br />
                  <strong>● Frontend Integration:</strong> Integrated APIs with
                  React.js, enhancing UI responsiveness.
                  <br />
                  <strong>● UI Development:</strong> Developed user interfaces
                  with JavaScript, HTML, and CSS, improving accessibility.
                  <br />
                  <strong>● Efficiency Gains:</strong> Streamlined data
                  retrieval, reducing manual handling by 35%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => (
  <div className="container my-5">
    <h2 className="animate__animated animate__slideInLeft text-light">
      Contact Me
    </h2>
    <form className="animate__animated animate__fadeInUp">
      <div className="mb-3">
        <label htmlFor="name" className="form-label text-light">
          Name
        </label>
        <input
          type="text"
          className="form-control bg-dark text-light border-0"
          id="name"
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label text-light">
          Email
        </label>
        <input
          type="email"
          className="form-control bg-dark text-light border-0"
          id="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label text-light">
          Message
        </label>
        <textarea
          className="form-control bg-dark text-light border-0"
          id="message"
          rows="4"
          placeholder="Enter your message"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-danger w-100">
        Submit
      </button>
    </form>
  </div>
);

function App() {
  return (
    <Router>
    <div className="App bg-dark text-light">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <NavLink className="navbar-brand text-warning" to="/">
            Rajul Bhatnagar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link text-info" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-info" to="/skills">
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-info" to="/experience">
                  Work Experience
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-info" to="/projects">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-info" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Add Suspense for fallback loading */}
      <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<WorkExperience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </div>
  </Router>
  );
}

export default App;
