import React from 'react';
import Project from './Project';
import Title from '../Titles/Title'
import {ProjectsSection} from './StyledProjectsContainer.styled'



const Projects = ({content}) => {

  const { projects } = content;

  const renderProjectList = () => {
    return projects.map(project => {
        return (
          <Project
          id = {project.id}
          name = {project.project_name}
          description = {project.project_description}
          live = {project.project_url_live}
          urlcode = {project.project_url_code}
          />
          
        )
    })
  }



  return (
    <ProjectsSection>
      <Title>My projects</Title>
      <div>
        {renderProjectList()}
      </div>
    </ProjectsSection>
  );
}

export default Projects;