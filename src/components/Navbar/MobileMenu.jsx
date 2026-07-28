import NavLinks from "./NavLinks";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`}>
      <nav className="mobile-menu__nav">
        <NavLinks onClick={onClose} />

        <button className="mobile-menu__cta">
          Let's Talk
        </button>
      </nav>
    </div>
  );
};

export default MobileMenu;