import Button from "../Common/Button/Button";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import ProjectTechStack from "./ProjectTechStack";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
      }}
      whileHover={{ y: -8 }}
    >
      {/* Project Image */}
      <div className="project-card__image">
        <img
          src={project.image}
          alt={project.title}
        />
      </div>

      {/* Project Content */}
      <div className="project-card__content">

        <span className="project-card__type">
          {project.type}
        </span>

        <h3 className="project-card__title">
          {project.title}
        </h3>

        <p className="project-card__description">
          {project.description}
        </p>

        <ProjectTechStack
          technologies={project.technologies}
        />

        <div className="project-card__actions">
            {project.github && (
              <Button
                href={project.github}
                variant="secondary"
                icon={<FaGithub />}
                className="project-card__btn"
              >
                GitHub
              </Button>
            )}
            
            {project.live && (
              <Button
                href={project.live}
                icon={<FaExternalLinkAlt />}
                className="project-card__btn"
              >
                Live Demo
              </Button>
            )}
        </div>

      </div>
    </motion.article>
  );
};

export default ProjectCard;