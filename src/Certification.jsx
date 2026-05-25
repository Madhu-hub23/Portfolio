
import React from "react";
import "./Certification.css";

function Certification() {
  const certificates = [
  {
    title: "AI and Indigenous Knowledge Workshop",
    issuer: "Holy Cross College (Autonomous)",
    icon: "🤖",
  },

  {
    title: "Artificial Intelligence & Machine Learning Internship",
    issuer: "Infyro",
    icon: "🧠",
  },

  {
    title: "International Seminar on Artificial Intelligence",
    issuer: "Holy Cross College",
    icon: "🎤",
  },

  {
    title: "AICTE ATAL FDP – Foundations & Applications of Data Science",
    issuer: "ST. Peter's College of Engineering and Technology",
    icon: "📊",
  },

  {
    title: "Full Stack Development Workshop",
    issuer: "St. Mary's College & Pantech e-Learning",
    icon: "💻",
  },

  {
  title: "ERP Internship – Website Creation & ERP Activities",
  issuer: "Holy Cross College (Autonomous)",
  icon: "🌐",
},

  {
    title: "30 Days MasterClass in Full Stack Development",
    issuer: "NoviTech R&D Private Limited",
    icon: "🚀",
  },
  {
      title: "Data Science Course – Mastering the Fundamentals",
      issuer: "Scaler Topics",
      icon: "📊",
    },
    {
      title: "Learn AI and Gen AI Basics",
      issuer: "AI Certification",
      icon: "✨",
    },
    {
      title: "MongoDB Certification",
      issuer: "Database Certification",
      icon: "🍃",
    },
    {
      title: "Python Certification",
      issuer: "Programming Certification",
      icon: "🐍",
    },
    {
      title: "Python vs SQL",
      issuer: "Technical Workshop",
      icon: "⚡",
    }
];

  return (
    <div className="certifications">
      <div className="certifications-container">
        <h2>MY ACHIEVEMENTS</h2>
        <h1>Certifications</h1>
        <p>
          Here are some certifications, workshops, seminars, and technical
          programs I have completed during my academic journey.
        </p>

        <div className="certificate-grid">
          {certificates.map((cert, index) => (
            <div className="certificate-card" key={index}>
              <div className="certificate-icon">{cert.icon}</div>
              <h2>{cert.title}</h2>
              <p>{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certification;

