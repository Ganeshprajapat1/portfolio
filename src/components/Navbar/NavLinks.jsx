import { NAV_LINKS } from "../../constants/navbarData.js";

const NavLinks = ({ onClick }) => {
  return (
    <>
      {NAV_LINKS.map((item) => (
        <button
          key={item.id}
          className="navbar__link"
          onClick={onClick}
        >
          {item.label}
        </button>
      ))}
    </>
  );
};

export default NavLinks;