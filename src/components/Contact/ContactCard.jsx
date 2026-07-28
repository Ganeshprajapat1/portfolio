import { motion } from "framer-motion";

const ContactCard = ({ contact, index }) => {
  const { icon: Icon, title, value, link } = contact;

  const content = (
    <>
      <div className="contact-card__icon">
        <Icon />
      </div>

      <div className="contact-card__content">
        <h3 className="contact-card__title">{title}</h3>
        <p className="contact-card__value">{value}</p>
      </div>
    </>
  );

  return (
    <motion.article
      className="contact-card"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
    >
    {link ? (
      <a
        href={link}
        className="contact-card__link"
        target={link.startsWith("http") ? "_blank" : undefined}
        rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    ) : (
      <div className="contact-card__link">
        {content}
      </div>
    )}
    </motion.article>
  );
};

export default ContactCard;