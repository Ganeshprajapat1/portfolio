import "./Education.css";

import { motion } from "framer-motion";

import { EDUCATION } from "../../constants/education";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <section id="education" className="education section">
      <div className="container">

        <motion.span
          className="section__subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education
        </motion.span>

        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          Academic Journey
        </motion.h2>

        <motion.p
          className="section__description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          My academic background has provided a strong foundation in
          software development, web technologies, and problem-solving,
          supporting my journey as a React and MERN Stack Developer.
        </motion.p>

        <div className="education__container">
          {EDUCATION.map((education, index) => (
            <EducationCard
              key={education.id}
              education={education}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;