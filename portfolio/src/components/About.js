import profilePic from "../images/ProfilePic.jpeg";

const About = () => (
  <div className="container my-5 bg-dark text-light p-5 rounded-3 shadow-lg">
    <div className="row align-items-center">
      <div className="col-md-6">
        <h2 className="text-warning mb-4">About Me</h2>
        <p className="text-light mb-4">
          I am a passionate and proactive software engineer with a strong
          foundation in Object-Oriented Programming (OOP). I specialize in
          designing and building robust, scalable solutions using technologies
          such as C++, C#, ASP.NET MVC, ASP.NET Core, and Entity Framework. My
          focus is on writing clean, efficient code that can handle complex
          challenges, particularly in optimizing CRUD operations and
          implementing secure authentication protocols like JWT.
        </p>
        <p className="text-light mb-4">
          With a keen interest in developing web applications, I am constantly
          honing my skills to build high-performance systems. I am also adept at
          ensuring seamless integration between front-end and back-end
          technologies to deliver intuitive user experiences. My goal is to
          leverage my technical expertise and creativity to solve real-world
          problems and contribute to innovative projects.
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
