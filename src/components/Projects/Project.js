import React from 'react';
import '../../style/App.css';
import {
  ProjectAction,
  LinkToProject,
  DescriptionOfProject,
  NameOfProject,
  IdOfProject,
  
} from './StyledProjectsContainer.styled'

const Project = ({id, name, description, live, urlcode} )=> {


  return (
    <>   
              
               
               <NameOfProject>{name}</NameOfProject>
               <DescriptionOfProject >{description}</DescriptionOfProject>
            
       
               <ProjectAction className='projectActions'>
               <IdOfProject>{id}</IdOfProject>
                  <LinkToProject
                    href={live}
                    >
                    {' '}
                    Live
                  </LinkToProject>

                <LinkToProject
                  href={urlcode}
                  >
                  {' '}
                  Code{' '}
                </LinkToProject>
      
    
              </ProjectAction>

    </>
  );
};
export default Project;