import React from 'react';
import './miniProject.css';

const MiniProject = () => {
  const projects = [
    {
      title: "Library Management System",
      description:
        "Console-based system to manage library records including books, users, rentals, and purchases. Built to automate workflow. Tools: Java, IntelliJ.",
      icon: "📚",
    },
    {
      title: "Stock Trend Predictor",
      description:
        "Analyzes historical stock data and uses the Gemini API to predict potential stock trends based on chart patterns. Tools: Python, Streamlit.",
      icon: "📊",
    },
    {
      title: "Startup AI Validator",
      description:
        "AI tool to validate startup ideas using NLP to analyze market demand, feasibility, and competition. Provides score + insights.",
      icon: "🤖",
    },
  ];

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="icon">{project.icon}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniProject;
