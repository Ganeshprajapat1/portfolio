import "./Hero.css";

import HeroContent from "./HeroContent";
import HeroButtons from "./HeroButtons";
import HeroImage from "./HeroImage";
import HeroSocials from "./HeroSocials";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero__container">
        {/* Left Content */}
        <div className="hero__left">
          <HeroContent />
          <HeroButtons />
          <HeroSocials />
        </div>

        {/* Right Image */}
        <div className="hero__right">
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;