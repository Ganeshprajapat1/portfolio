import "./Navbar.css";
import { useEffect, useState } from "react";


import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";


const Navbar = () => {

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

    
  return (
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__container">
        <div className="navbar__logo">
          Ganesh Prajapat
        </div>

        <nav className="navbar__nav">
          <NavLinks />
        </nav>

        <button className="navbar__cta">
          Let's Talk
        </button>

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
        />
      </div>
    </header>
  );
};

export default Navbar;