import "./Contact.css";

import { motion } from "framer-motion";

import { CONTACT_INFO } from "../../constants/contact";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.span
          className="section__subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.span>

        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="section__description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          I'm always open to discussing new opportunities, collaborating on
          exciting projects, or simply connecting with fellow developers.
          Feel free to reach out anytime!
        </motion.p>

        <div className="contact__container">
          <div className="contact__info">
            {CONTACT_INFO.map((item, index) => (
              <ContactCard
                key={item.id}
                contact={item}
                index={index}
              />
            ))}
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;