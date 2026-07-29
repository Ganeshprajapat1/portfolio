import { NAV_LINKS } from "../../constants/navigation";

const NavLinks = ({ activeSection, onClick }) => {
  const handleNavigation = (href) => {
    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    onClick?.();
  };

  return (
    <>
      {NAV_LINKS.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className={`navbar__link ${
            activeSection === item.href.substring(1) ? "active" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleNavigation(item.href);
          }}
        >
          {item.label}
        </a>
      ))}
    </>
  );
};

export default NavLinks;