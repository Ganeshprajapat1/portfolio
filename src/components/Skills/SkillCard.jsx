import { motion } from "framer-motion";

const SkillCard = ({ skill, index }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
      }}
      whileHover={{
        y: -5,
        scale: 1.03,
      }}
    >
      <div className="skill-card__icon">
        <Icon />
      </div>

      <h4 className="skill-card__title">
        {skill.name}
      </h4>
    </motion.div>
  );
};

export default SkillCard;