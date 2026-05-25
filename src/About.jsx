import "./About.css";
import Image from "./assets/Image.png";
function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* Left Side Image */}
        <div className="about-image">
         <img src={Image} alt="profile" />
        </div>

        {/* Right Side Content */}
        <div className="about-content">

          <h3>GET TO KNOW ME</h3>

          <h1>
             <span> About Me</span>
          </h1>

          <p>
            Hello! I’m Madhumidha, a Data Science student who loves
            exploring technology and creating innovative solutions.
            I am passionate about Machine Learning, Artificial Intelligence,
            Data Analytics and Frontend Development.
          </p>

          <p>
            I enjoy working on projects that challenge me to learn
            new things and improve my technical and problem-solving skills.
          </p>

          <p>
            Currently, I am doing an internship at Frontier Wox Technologies,
            where I am gaining hands-on experience and contributing
            to real-world projects.
          </p>

          <p>
            I am a dedicated and adaptable individual with good
            communication skills and a strong desire to learn and grow
            in the field of Data Science.
          </p>

          {/* Cards */}
          <div className="about-cards">

            <div className="card">
              <h2>🎓</h2>
              <h3>Education</h3>
              <p>M.Sc Data Science</p>
              <p>(2025-2027)</p>
            </div>

            <div className="card">
              <h2>💻</h2>
              <h3>Interests</h3>
              <p>Machine Learning,</p>
              <p>AI, Web Development</p>
            </div>

            <div className="card">
              <h2>💼</h2>
              <h3>Internship</h3>
              <p>Frontier Wox</p>
              <p>Technologies</p>
            </div>

            <div className="card">
              <h2>🎯</h2>
              <h3>Goal</h3>
              <p>To become a skilled</p>
              <p>Data Scientist</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;