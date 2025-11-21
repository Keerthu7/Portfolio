import React from 'react';
import { FaUser, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLanguage } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './aboutMe.css';
import School from '../../assets/portfolio-2.png';
import College from '../../assets/portfolio-3.png';

const AboutMe = () => {
  // Variants for animations
  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  const bounceVariant = {
    hover: { scale: 1.05, transition: { yoyo: Infinity, duration: 0.3 } }
  };

  return (
    <motion.div 
      className="about-container"
      initial="hidden"
      animate="visible"
      variants={fadeInVariant}
    >
      <motion.span className='aboutMe' variants={bounceVariant} whileHover="hover">
        About <span className='me'> Me</span>
      </motion.span>
      
      <motion.p className='aboutMeDesc' variants={fadeInVariant}>
        I’m an enthusiastic web designer & MERN - Stack developer focused on crafting clean, user‑friendly experiences. I’m passionate about building excellent software that improves the lives of those around me.
      </motion.p>

      <motion.h3 className="section-title" variants={fadeInVariant}>Personal Info</motion.h3>
      <div className="personal-info">
        <div className="info-group">
          <motion.p variants={fadeInVariant}><FaUser className="icon" /> <strong>First Name :</strong> Keerthana</motion.p>
          <motion.p variants={fadeInVariant}><FaUser className="icon" /> <strong>Last Name :</strong> Subramaniam</motion.p>
          <motion.p variants={fadeInVariant}><FaUser className="icon" /> <strong>Age :</strong> 21 Years</motion.p>
          <motion.p variants={fadeInVariant}><FaUser className="icon" /> <strong>Nationality :</strong> Indian</motion.p>
          <motion.p variants={fadeInVariant}><FaUser className="icon" /> <strong>Freelance :</strong> Available</motion.p>
        </div>
        <div className="info-group">
          <motion.p variants={fadeInVariant}><FaMapMarkerAlt className="icon" /> <strong>Address :</strong> Coimbatore</motion.p>
          <motion.p variants={fadeInVariant}><FaPhoneAlt className="icon" /> <strong>Phone :</strong> 9345966973</motion.p>
          <motion.p variants={fadeInVariant}><FaEnvelope className="icon" /> <strong>Email :</strong> keerthanasubbu5@gmail.com</motion.p>
          <motion.p variants={fadeInVariant}><FaLanguage className="icon" /> <strong>Languages :</strong> Tamil, English</motion.p>
        </div>
      </div>

      <h4 className="section-titlee">Education</h4>
      <div className="education-info">
        <motion.div 
          className="education-item" 
          whileHover={{ scale: 1.03 }} 
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="skillBar">
            <img src={College} alt="College" className="skillBarImg" />
            <div className="skillBarText">
              <h2><strong>Degree</strong> - SNS College of Engineering</h2>
              <p>Where innovation meets excellence, SNS paves the path for future technocrats.</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="education-item" 
          whileHover={{ scale: 1.03 }} 
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="skillBar">
            <img src={School} alt="School" className="skillBarImg" />
            <div className="skillBarText">
              <h2><strong>HSC/SSLC</strong> - Mother's Matric Hr Sec School</h2>
              <p>Where childhood meets enjoyment, school paves the path for future talents.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
