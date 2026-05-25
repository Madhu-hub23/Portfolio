import React from "react";
import "./Project.css";

function Project() {
  const projectData = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built using React JS, HTML, and CSS.",
      tech: "React JS | HTML | CSS",
      icon: "🌐",
    },

    {
      title: "To Do List App",
      description:
        "A task management application to add, delete, and organize tasks.",
      tech: "HTML | CSS | JavaScript",
      icon: "📝",
    }
  ];

  return (
    <div className="projects">
      <div className="projects-container">
        <h2>MY WORK</h2>
        <h1>Projects</h1>

        <p>
          Here are some projects I developed during my learning journey in
          frontend development and data science.
        </p>

        <div className="project-grid">
          {projectData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-icon">{project.icon}</div>

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <h4>{project.tech}</h4>

              <div className="project-buttons">
                <button>GitHub</button>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;