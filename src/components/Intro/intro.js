import React from 'react';
import { motion } from 'framer-motion';
import './intro.css';
import bg from '../../assets/image.png';
import resumeImg from '../../assets/resume.png';
import resumePdf from '../../assets/Keerthana_Resume.pdf';
import { Link } from 'react-scroll';

const Intro = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.2, ease: 'easeOut' } },
  };

  // Download resume function
  const downloadResume = () => {
    fetch(resumePdf)
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Keerthana_Resume.pdf');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  };

  return (
    <motion.section id="intro">
      <motion.div
        className="introContent"
        initial="hidden"
        animate="visible"
        variants={slideInLeft}
      >
        <motion.span className="hello" variants={fadeIn}>
          Hello,
        </motion.span>

        <motion.span className="introText" variants={fadeIn}>
          I’m <span className="introName">Keerthana</span>
          <br /> FullStack Developer
        </motion.span>

        <motion.p className="introPara" variants={fadeIn}>
          I’m a fullstack developer with experience <br /> in web and mobile applications
        </motion.p>

        {/* BUTTON GROUP */}
        <div className="btnGroup">
          {/* Hire Me */}
          <Link to="contact" smooth={true} duration={500}>
            <motion.button
              className="btn"
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
            >
              Hire me
            </motion.button>
          </Link>

          {/* Download Resume */}
          <motion.button
            className="btn"
            onClick={downloadResume}
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={resumeImg} alt="Resume" className="btnImg" />
            Download Resume
          </motion.button>
        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.img
        src={bg}
        alt="profile"
        className="bg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />
    </motion.section>
  );
};

export default Intro;
