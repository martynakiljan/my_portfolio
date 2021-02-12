import React from 'react';
import {ProjectsSection} from './StyledProjectsContainer.styled'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const Project = () => {
    return (
        <ProjectsSection>

            <FontAwesomeIcon  
               className="iconFontAwesome--project" 
               icon={faLaptopCode}
               secondary
            />
            <FontAwesomeIcon  
               className="iconFontAwesome--project" 
               icon={faCode}
               secondary
            />



        </ProjectsSection>
    )

}

export default Project;