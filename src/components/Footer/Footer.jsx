import "./Footer.css";

import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">

        <div className="footer__top">
          <h2 className="footer__logo">Ganesh Prajapat</h2>

          <p className="footer__tagline">
            React.js Developer • MERN Stack Developer
          </p>
        </div>

        <nav className="footer__nav">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="footer__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__socials">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:yourmail@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} Ganesh Prajapat. All Rights Reserved.
          </p>

          <a href="#hero" className="footer__top-btn" aria-label="Back to top">
            <FaArrowUp />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;