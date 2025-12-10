
import file from "../assets/profile.image.jpeg";
import resumeData from "../data/resumeData";

const About = () => (
  <div className="container my-5 about-container">
    <div className="row align-items-center">
      <div className="col-lg-5 mb-4 mb-lg-0 text-center animate__animated animate__fadeInLeft">
        <img
          src={file}
          alt="Profile"
          className="img-fluid rounded-circle shadow-lg profile-img"
          style={{ width: "300px", height: "300px", objectFit: "cover", border: "5px solid var(--primary-color)" }}
        />
      </div>
      <div className="col-lg-7 animate__animated animate__fadeInRight">
        <div className="p-4 rounded-3 shadow-lg glass-panel">
          <h2 className="text-primary mb-4">About Me</h2>
          <p className="lead text-light">
            {resumeData.summary}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
