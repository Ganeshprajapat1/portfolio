import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.article
      className="experience-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
      }}
    >
      <div className="experience-card__content">
        <span className="experience-card__type">
          {experience.type}
        </span>

        <h3 className="experience-card__role">
          {experience.role}
        </h3>

        <h4 className="experience-card__company">
          {experience.company}
        </h4>

        <div className="experience-card__meta">
          <span>
            <FaMapMarkerAlt />
            {experience.location}
          </span>

          <span>
            <FaCalendarAlt />
            {experience.duration}
          </span>
        </div>

        <ul className="experience-card__description">
          {experience.description.map((item) => (
            <li key={item}>
              <FaCheckCircle />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="experience-card__technologies">
          {experience.technologies.map((technology) => (
            <span
              key={technology}
              className="experience-card__technology"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default ExperienceCard;