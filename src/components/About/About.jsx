import "./About.css";

import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";
import AboutStats from "./AboutStats";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about__container">
        {/* Left Side */}
        <div className="about__left">
          <AboutImage />
        </div>

        {/* Right Side */}
        <div className="about__right">
          <AboutContent />
          <AboutStats />
        </div>
      </div>
    </section>
  );
};

export default About;