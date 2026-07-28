const ProjectTechStack = ({ technologies }) => {
  return (
    <div className="project-tech-stack">
      {technologies.map((technology) => (
        <span
          key={technology}
          className="project-tech-stack__item"
        >
          {technology}
        </span>
      ))}
    </div>
  );
};

export default ProjectTechStack;