import "./Projects.css";

import { motion } from "framer-motion";

import { PROJECTS } from "../../constants/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <div className="container">

        <motion.span
          className="section__subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Work
        </motion.span>

        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.p
          className="section__description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          A collection of projects showcasing my experience in
          React.js, Redux-toolkit Firebase, and modern frontend
          development with a focus on clean architecture and
          responsive user interfaces.
        </motion.p>

        <div className="projects__container">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;