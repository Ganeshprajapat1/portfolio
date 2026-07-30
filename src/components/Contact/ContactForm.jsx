import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import Button from "../Common/Button/Button";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required.";
        if (value.trim().length < 3)
          return "Name must be at least 3 characters.";
        if (!/^[A-Za-z\s]+$/.test(value))
          return "Only letters and spaces are allowed.";
        return "";

      case "email":
        if (!value.trim()) return "Email is required.";
        if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
        )
          return "Enter a valid email address.";
        return "";

      case "subject":
        if (!value.trim()) return "Subject is required.";
        if (value.trim().length < 5)
          return "Subject must be at least 5 characters.";
        return "";

      case "message":
        if (!value.trim()) return "Message is required.";
        if (value.trim().length < 20)
          return "Message must be at least 20 characters.";
        return "";

      default:
        return "";
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const validateForm = () => {
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      subject: validateField("subject", formData.subject),
      message: validateField("message", formData.message),
    };

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  const isFormValid =
    formData.name.trim().length >= 3 &&
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email) &&
    formData.subject.trim().length >= 5 &&
    formData.message.trim().length >= 20;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setErrors({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
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
        />

        {errors.name && (
          <span className="contact-form__error">
            {errors.name}
          </span>
        )}
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
        />

        {errors.email && (
          <span className="contact-form__error">
            {errors.email}
          </span>
        )}
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
        />

        {errors.subject && (
          <span className="contact-form__error">
            {errors.subject}
          </span>
        )}
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
        />

        {errors.message && (
          <span className="contact-form__error">
            {errors.message}
          </span>
        )}
      </div>

      <Button
        type="submit"
        disabled={loading || !isFormValid}
      >
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;