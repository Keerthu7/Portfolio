import React,{useRef} from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_p4iwf3k', 'template_b39wl1l', form.current, {
        publicKey: 'Rf6bEUOZYbe-Qd8vAh5Rh',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="contact-section" id="contact">
      <div className="contact-header">
        <h2>Get in <span className="highlight">Touch</span></h2>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <h3>DON'T BE SHY!</h3>
          <p>
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="contact-detail">
            <p><span className="icon">📧</span> MAIL ME</p>
            <p className="detail-text">keerthanasubbu5@gmail.com</p>
          </div>
          <div className="contact-detail">
            <p><span className="icon">📞</span> CALL ME</p>
            <p className="detail-text">9345966973</p>
          </div>
        </div>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Your Name" className="input-field" required name="user_name" />
          <input type="email" placeholder="Your Email" className="input-field" required name="user_email" />
          <input type="text" placeholder="Subject" className="input-field" />
          <textarea placeholder="Your Message" className="textarea-field" required name="message"></textarea>
          <button type="submit" className="submit-button">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
