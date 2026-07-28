import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const SkillsCategory = ({ category, index }) => {
  const CategoryIcon = category.icon;

  return (
    <motion.div
      className="skills-category"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
      }}
    >
      <div className="skills-category__header">
        <div className="skills-category__icon">
          <CategoryIcon />
        </div>

        <h3 className="skills-category__title">
          {category.title}
        </h3>
      </div>

      <div className="skills-category__grid">
        {category.skills.map((skill, i) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={i}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsCategory;