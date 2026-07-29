import "./Footer.css";

import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

import { NAV_LINKS } from "../../constants/navigation";

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
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="footer__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__socials">
          <a
            href="https://github.com/Ganeshprajapat1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/ganesh-prajapat-5b6a68257"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:prajapatganesh129@gmail.com"
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