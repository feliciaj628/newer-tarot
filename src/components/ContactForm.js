// ContactForm.js
import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to a server)
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <p className="contact-title">
            <span className="font-test">
              or...
              <br />
            </span>
            send a message
          </p>
          <hr className="contact-hr"></hr>
          <label>
            <p className="label">name</p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <p className="label">email</p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <p className="label">message</p>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <div className="button-container">
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
