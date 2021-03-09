import React, { useEffect } from 'react';
import '../../style/App.css';
import {
  Image,
  LinkToProjectOne,
  LinkToProjectTwo,
  DescriptionOfProject,
  NameOfProject,
  IdOfProject,
  ContainerForProject,
  ContainerForUrl
  
} from './StyledProjectsContainer.styled'
const Project = ({id, name, description, live, urlcode, img} )=> {




  return (
    <>   
               <ContainerForProject>
            
               <NameOfProject>{name}</NameOfProject>
               <DescriptionOfProject >{description}</DescriptionOfProject>
               <Image  src={img} alt="imgproject"/>
               <IdOfProject>{id}</IdOfProject>
               <ContainerForUrl>
               <LinkToProjectOne
                    href={live}
                    >
                    {' '}
                    Live
                  </LinkToProjectOne>

                  <LinkToProjectTwo
                  
                    href={urlcode}
                    >
                    {' '}
                    Code{' '}
                  </LinkToProjectTwo>
               </ContainerForUrl>
            
             </ContainerForProject>
    
    </>

  );
};
export default Project;