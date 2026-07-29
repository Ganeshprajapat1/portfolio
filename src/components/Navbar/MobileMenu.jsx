import NavLinks from "./NavLinks";

const MobileMenu = ({ isOpen, onClose, activeSection, }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`}>
      <nav className="mobile-menu__nav">
        <NavLinks 
          activeSection={activeSection}
          onClick={onClose}
        />

        <a href="#contact" className="mobile-menu__cta" onClick={onClose}>
          Let's Talk
        </a>

      </nav>
    </div>
  );
};

export default MobileMenu;