import React, { useRef } from "react";
import Navbar from "./Navbar";
import "../styles/contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        alert('Message sent!');
        form.current.reset();
      }, (error) => {
        alert('Failed to send. Please try again.');
        console.log(error.text);
      });
  };

  return (
    <div className="contact-page">
      <Navbar />
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>I'd love to hear from you! Fill out the form below to get in touch.</p>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
