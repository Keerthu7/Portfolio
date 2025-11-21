import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I Do</span>
      <span className='skillDesc'>
        I'm a dedicated and skilled programmer proficient in Java and full-stack development.
        Passionate about continuous learning, exploring new technologies, and building efficient,
        scalable solutions.
      </span>

      {/* Java */}
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={WebDesign} alt='Java' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Java</h2>
            <p>
              Proficient in developing scalable, object-oriented applications using Java.
            </p>
          </div>
        </div>
      </div>

      {/* SQL */}
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={UIDesign} alt='SQL' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>SQL</h2>
            <p>
              Strong understanding of relational databases and writing efficient SQL queries.
            </p>
          </div>
        </div>
      </div>

      {/* Node.js */}
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={AppDesign} alt='NodeJS' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Node.js</h2>
            <p>
              Skilled in building server-side applications, REST APIs, and backend logic using Node.js and Express.
            </p>
          </div>
        </div>
      </div>

      {/* MongoDB */}
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={WebDesign} alt='MongoDB' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>MongoDB</h2>
            <p>
              Experienced in designing NoSQL database structures and working with Mongoose for data modeling.
            </p>
          </div>
        </div>
      </div>

      {/* MERN Stack */}
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={AppDesign} alt='AppDesign' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>MERN Stack</h2>
            <p>
              Experienced in building complete full-stack applications using MongoDB, Express, React, and Node.js.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default skills;
