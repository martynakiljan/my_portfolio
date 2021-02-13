import React from 'react';
import Title from '../Titles/Title'
import Project from './Project'
import {
  ProjectsSection, 
  NumberOfProject,
  TextUnderProjects
 } from './StyledProjectsContainer.styled'



const Projects = () => {
    return (
     <>
          
            <ProjectsSection  id="projects">
            <Title>My projects</Title>
              <NumberOfProject>1</NumberOfProject>
              <Project/>

              <NumberOfProject>2</NumberOfProject>
              <Project/>
              
              <NumberOfProject>3</NumberOfProject>
              <Project/>

              <NumberOfProject>4</NumberOfProject>
              <Project/>
              <TextUnderProjects>too little ? Come to my github!</TextUnderProjects>


            </ProjectsSection>
     </>
    )
}

export default Projects;