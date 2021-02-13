import React from 'react';
import {BoxForProject} from './StyledProjectsContainer.styled'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const Project = () => {
    return (
        <BoxForProject>

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



        </BoxForProject>
    )

}

export default Project;