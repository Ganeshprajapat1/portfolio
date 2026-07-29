import "./Navbar.css";
import { useEffect, useState } from "react";


import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";


const Navbar = () => {

  const [activeSection, setActiveSection] = useState("hero");

  const [isScrolled, setIsScrolled] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

    
  return (
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__container">
        <div className="navbar__logo">
          Ganesh Prajapat
        </div>

        <nav className="navbar__nav">
          <NavLinks activeSection={activeSection} />
        </nav>

        <a href="#contact" className="navbar__cta">
          Let's Talk
        </a>

        <button
          className="navbar__menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
        <MobileMenu 
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          activeSection={activeSection}
        />
      </div>
    </header>
  );
};

export default Navbar;