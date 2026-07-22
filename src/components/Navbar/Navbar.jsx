import "./Navbar.css";

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
      </div>
    </header>
  );
};

export default Navbar;