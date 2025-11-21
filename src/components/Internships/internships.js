import React from 'react';
import './internships.css';

const Internships = () => {
  const internships = [
    {
      title: "Software Developer at Hynox (Oct 2025 – Present)",
      description: "Currently working as a Software Developer at Hynox, contributing to web applications, mobile apps, and custom software solutions with modern technologies.",
      icon: "💼",
    },
    {
      title: "MERN Stack Development Intern at Hitshoppers (July 2024 – Jan 2025)",
      description: "Actively contributed to the development of dynamic web applications using MongoDB, Express.js, React.js, and Node.js.",
      icon: "📊",
    },
   
  ];

  return (
    <div className="internships-container">
      <h2>Internships</h2>
      <div className="internships-grid">
        {internships.map((internship, index) => (
          <div className="internship-card" key={index}>
            <div className="icon">{internship.icon}</div>
            <h3>{internship.title}</h3>
            <p>{internship.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internships;
