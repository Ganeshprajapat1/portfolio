import { motion } from "framer-motion";
import Button from "../Common/Button/Button";
import { HERO_CONTENT } from "../../constants/hero";

const HeroButtons = () => {
  return (
    <motion.div
      className="hero__buttons"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.8,
        duration: 0.6,
      }}
    >
      <Button variant="primary">
        {HERO_CONTENT.buttons.primary}
      </Button>

      <Button variant="secondary">
        {HERO_CONTENT.buttons.secondary}
      </Button>
    </motion.div>
  );
};

export default HeroButtons;