import "./Navbar.css";

import { HiOutlineMenuAlt3 } from "react-icons/hi";

import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <header className="navbar">
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

        <button className="navbar__menu-btn" aria-label="Open menu">
            <HiOutlineMenuAlt3 />
        </button>
      </div>
    </header>
  );
};

export default Navbar;