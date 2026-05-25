
import "./Skills.css";
function Skills() {
  return (
    <section className="skills-section" id="skills">

      <div className="skills-container">

        <h2>MY SKILLS</h2>

        <h1>
          Technical <span>Skills</span>
        </h1>

        <p>
          Here are the technologies and tools that I have learned
          through academics, certifications, and internship experience.
        </p>

        <div className="skills-grid">

          <div className="skill-card">
            <h2>🌐</h2>
            <h3>HTML</h3>
          </div>

          <div className="skill-card">
            <h2>🐍</h2>
            <h3>Python</h3>
          </div>
          <div className="skill-card">
            <h2>🎨</h2>
            <h3>CSS</h3>
          </div>

          <div className="skill-card">
            <h2>🗄️</h2>
            <h3>SQL</h3>
          </div>

          <div className="skill-card">
            <h2>📊</h2>
            <h3>MS Excel</h3>
          </div>

          <div className="skill-card">
            <h2>📈</h2>
            <h3>R Programming</h3>
          </div>

          <div className="skill-card">
            <h2>🍃</h2>
            <h3>MongoDB</h3>
          </div>

          <div className="skill-card">
            <h2>🤖</h2>
            <h3>Machine Learning</h3>
          </div>

          <div className="skill-card">
            <h2>💻</h2>
            <h3>Frontend Development</h3>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;