import { ABOUT_CONTENT } from "../../constants/about";

const AboutContent = () => {
  return (
    <>
      <span className="section__subtitle">
        {ABOUT_CONTENT.subtitle}
      </span>

      <h2 className="section__title">
        {ABOUT_CONTENT.title}
      </h2>

      {ABOUT_CONTENT.description.map((text, index) => (
        <p
          key={index}
          className="section__description"
        >
          {text}
        </p>
      ))}
    </>
  );
};

export default AboutContent;