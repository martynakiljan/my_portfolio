/** @format */

import React from "react";
import Project from "./Project";
import Title from "../Titles/Title";
import { ProjectsSection } from "./StyledProjectsContainer.styled";
import projectsImages from "../../data/Projects/DataprojectsArray";

const Projects = () => {
  const renderProjectList = () => {
    return projectsImages.map((project) => {
      return (
        <Project
          key={project}
          id={project.id}
          name={project.project_name}
          description={project.project_description}
          live={project.project_url_live}
          urlcode={project.project_url_code}
          img={project.project_img}
          technologies={project.technologies}
          isVisible={project.isVisible}
        />
      );
    });
  };

  return (
    <ProjectsSection id="projects">
      <Title>My projects</Title>
      {renderProjectList()}
    </ProjectsSection>
  );
};

export default Projects;
