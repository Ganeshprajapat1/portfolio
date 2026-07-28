import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaAward,
} from "react-icons/fa";

const EducationCard = ({ education, index }) => {
  return (
    <motion.article
      className="education-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
      }}
    >
      <div className="education-card__content">

        <div className="education-card__header">
          <FaGraduationCap className="education-card__icon" />

          <div>
            <h3 className="education-card__degree">
              {education.degree}
            </h3>

            <p className="education-card__field">
              {education.field}
            </p>
          </div>
        </div>

        <div className="education-card__meta">

          <span>
            <FaUniversity />
            {education.institution}
          </span>

          <span>
            <FaMapMarkerAlt />
            {education.location}
          </span>

          <span>
            <FaCalendarAlt />
            {education.duration}
          </span>

          <span>
            <FaAward />
            {education.score}
          </span>

        </div>

        <p className="education-card__description">
          {education.description}
        </p>

      </div>
    </motion.article>
  );
};

export default EducationCard;