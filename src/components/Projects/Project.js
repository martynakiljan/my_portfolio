import React from 'react';
import {StyledBoxForProject} from './StyledProjects.styled'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLaptopCode} from "@fortawesome/free-brands-svg-icons"
import { faCode, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const Project = () => {
    return (
        <StyledBoxForProject>

            <FontAwesomeIcon  
               className="iconFontAwesome--projecy" 
               icon={faLaptopCode}
               secondary
            />
            <FontAwesomeIcon  
               className="iconFontAwesome--project" 
               icon={faCode}
               secondary
            />



        </StyledBoxForProject>
    )

}

export default Project;