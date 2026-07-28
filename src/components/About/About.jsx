import "./About.css";

import AboutContent from "./AboutContent";
import AboutStats from "./AboutStats";

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container about__container">

        <AboutContent />

        <AboutStats />

      </div>
    </section>
  );
};

export default About;