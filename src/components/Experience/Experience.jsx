import "./Experience.css";

import { motion } from "framer-motion";

import { EXPERIENCE } from "../../constants/experience";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section id="experience" className="experience section">
      <div className="container">

        <motion.span
          className="section__subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.span>

        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>

        <motion.p
          className="section__description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          My professional journey as a MERN Stack Developer Intern,
          building responsive web applications, integrating APIs,
          and collaborating with development teams.
        </motion.p>

        <div className="experience__container">
          {EXPERIENCE.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;