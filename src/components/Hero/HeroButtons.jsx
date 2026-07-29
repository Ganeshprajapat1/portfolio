import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

import Button from "../Common/Button/Button";
import { HERO_CONTENT } from "../../constants/hero";

const HeroButtons = () => {
  return (
    <motion.div
      className="hero__buttons"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.8,
        duration: 0.6,
      }}
    >
      <Button
        variant="primary"
        href="/Ganesh_Prajapat_Resume.pdf"
        download
        icon={<FiDownload />}
        >
        {HERO_CONTENT.buttons.primary}
      </Button>

      <Button
        variant="secondary"
        href="#contact"
        
      >
        {HERO_CONTENT.buttons.secondary}
      </Button>
    </motion.div>
  );
};

export default HeroButtons;