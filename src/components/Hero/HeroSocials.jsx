import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HERO_CONTENT } from "../../constants/hero";

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Email: FaEnvelope,
};

const HeroSocials = () => {
  return (
    <motion.div
      className="hero__socials"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1,
        duration: 0.6,
      }}
    >
      {HERO_CONTENT.socials.map((social) => {
        const Icon = socialIcons[social.name];

        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-link"
            aria-label={social.name}
          >
            <Icon />
          </a>
        );
      })}
    </motion.div>
  );
};

export default HeroSocials;