import { ABOUT_CONTENT } from "../../constants/about";

const AboutStats = () => {
  return (
    <div className="about__stats">
      {ABOUT_CONTENT.stats.map((stat) => (
        <div key={stat.label} className="about__stat-card">
          <h3 className="about__stat-number">
            {stat.number}
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