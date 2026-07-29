import { ABOUT_CONTENT } from "../../constants/about";
import AnimatedCounter from "../Common/AnimatedCounter";

import { useRef } from "react";
import { useInView } from "framer-motion";

const AboutStats = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  return (
    <div className="about__stats" ref={ref}>
      {ABOUT_CONTENT.stats.map((stat) => (
        <div key={stat.label} className="about__stat-card">
          <h3 className="about__stat-number">
            <AnimatedCounter
              end={stat.number}
              start={isInView}
            />
            {stat.suffix}
          </h3>

          <p className="about__stat-label">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AboutStats;