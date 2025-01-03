import profilePic from "../images/ProfilePic.jpeg";

const About = () => (
  <div className="container my-5 bg-dark text-light p-5 rounded-3 shadow-lg">
    <div className="row align-items-center">
      <div className="col-md-6">
        <h2 className="text-warning mb-4">About Me</h2>
        <p className="text-light mb-4">
          I am a results-driven and proactive software engineer with a solid
          foundation in Object-Oriented Programming (OOP) and expertise in
          developing robust, scalable, and efficient solutions. My technical
          proficiency includes C++, C#, ASP.NET MVC, ASP.NET Core, Entity
          Framework, React, and JavaScript. I am passionate about writing clean,
          maintainable code that effectively addresses complex challenges, such
          as optimizing CRUD operations and implementing secure authentication
          protocols using JWT.
        </p>
        <p className="text-light mb-4">
          With a strong focus on full-stack web application development, I
          continuously enhance my skills to deliver high-performance,
          user-centric systems. I excel in integrating front-end technologies
          like React and JavaScript with back-end frameworks to create seamless
          and intuitive user experiences. My goal is to leverage my technical
          acumen, creativity, and collaborative mindset to drive innovation,
          solve real-world problems, and contribute to impactful software
          projects.
        </p>
      </div>
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <img
          src={profilePic}
          alt="Rajul Bhatnagar's Profile"
          className="img-fluid rounded-circle shadow-lg"
          style={{ maxWidth: "300px", border: "4px solid #ff4500" }}
          loading="lazy"
        />
      </div>
    </div>
    <div className="mt-4 text-center">
      <h4 className="text-warning">Let's Build Something Amazing Together!</h4>
    </div>
  </div>
);

export default About;
