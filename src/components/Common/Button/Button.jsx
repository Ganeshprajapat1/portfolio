import "./Button.css";

const Button = ({
  children,
  variant = "primary",
  href,
  target = "_self",
  rel,
  onClick,
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`btn btn--${variant}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={`btn btn--${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;