import { motion } from "framer-motion";

import "./Skills.css";
import { SKILLS } from "../../constants/skills";
import SkillsCategory from "./SkillsCategory";

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.span
          className="section__subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.span>

        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Technologies I Work With
        </motion.h2>

        <div className="skills__container">
          {SKILLS.map((category, index) => (
            <SkillsCategory
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;