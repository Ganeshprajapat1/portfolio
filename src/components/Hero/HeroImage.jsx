import { motion } from "framer-motion";
import profileImage from "../../assets/images/profile.png";

const HeroImage = () => {
  return (
    <motion.div
      className="hero__image-wrapper"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.5,
        duration: 0.8,
      }}
    >
      <div className="hero__image-glow"></div>

      <div className="hero__image">
        <img
          src={profileImage}
          alt="Ganesh Prajapat"
        />
      </div>
    </motion.div>
  );
};

export default HeroImage;