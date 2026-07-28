import { useState } from "react";

import Button from "../Common/Button/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS integration will be added here later.
    console.log(formData);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__group">
        <label htmlFor="name" className="contact-form__label">
          Name
        </label>

        <input
          id="name"
          type="text"
          name="name"
          className="contact-form__input"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="contact-form__group">
        <label htmlFor="email" className="contact-form__label">
          Email
        </label>

        <input
          id="email"
          type="email"
          name="email"
          className="contact-form__input"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="contact-form__group">
        <label htmlFor="subject" className="contact-form__label">
          Subject
        </label>

        <input
          id="subject"
          type="text"
          name="subject"
          className="contact-form__input"
          placeholder="Enter subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>

      <div className="contact-form__group">
        <label htmlFor="message" className="contact-form__label">
          Message
        </label>

        <textarea
          id="message"
          name="message"
          rows="6"
          className="contact-form__textarea"
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <Button type="submit">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;