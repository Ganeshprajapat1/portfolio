import { motion } from "framer-motion";
import { HERO_CONTENT } from "../../constants/hero";

const HeroContent = () => {
  return (
    <>
      <motion.span
        className="hero__badge"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {HERO_CONTENT.badge}
      </motion.span>

      <motion.h1
        className="hero__title"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {HERO_CONTENT.greeting}
        <br />
        <span>{HERO_CONTENT.name}</span>
      </motion.h1>

      <motion.h2
        className="hero__role"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {HERO_CONTENT.role}
      </motion.h2>

      <motion.p
        className="hero__description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        {HERO_CONTENT.description}
      </motion.p>
    </>
  );
};

export default HeroContent;