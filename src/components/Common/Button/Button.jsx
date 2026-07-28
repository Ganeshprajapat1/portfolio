import "./Button.css";

const Button = ({
  children,
  variant = "primary",
  href,
  target = "_self",
  rel,
  onClick,
  className = "",
  icon,
}) => {
  const classes = `btn btn--${variant} ${className}`.trim();

  const content = (
    <>
      {icon && <span className="btn__icon">{icon}</span>}
      <span className="btn__text">{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;