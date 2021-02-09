import React from 'react';
import {StyledBoxForSkills, StyledInfoForSkills} from './StyledSkills.styled'
import Title from '../Titles/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faNpm } from '@fortawesome/free-solid-svg-icons'
import { faNpm, faJs, faCss3Alt, faGithub, faHtml5 , faReact, faBootstrap} from "@fortawesome/free-brands-svg-icons"
import { faBox, faTasks, faGraduationCap, faRunning, faLaptop, faExclamationCircle, faTrophy } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
    return (
        <>
        <Title>My hard skills</Title>
        <StyledInfoForSkills>click the icon!</StyledInfoForSkills>


        <StyledBoxForSkills>


         <FontAwesomeIcon  
               className="iconFontAwesome--aboutMe" 
               icon={faNpm}
               secondary
         />  
        <FontAwesomeIcon  
               className="iconFontAwesome--aboutMe" 
               icon={faJs}
               secondary
         />

        <FontAwesomeIcon  
               className="iconFontAwesome--aboutMe" 
               icon={faCss3Alt}
               secondary
         />  

        <FontAwesomeIcon  
               className="iconFontAwesome--aboutMe" 
               icon={faGithub}
               secondary
         />  
        <FontAwesomeIcon  
               className="iconFontAwesome--aboutMe" 
               icon={faHtml5}
               secondary
         />  
        <FontAwesomeIcon  
               className="iconFontAwesome--aboutMe" 
               icon={faReact}
               secondary
         />  
        <FontAwesomeIcon  
               className="iconFontAwesome--aboutMe" 
               icon={faBox}
               secondary
         />  
        <FontAwesomeIcon  
               className="iconFontAwesome--aboutMe" 
               icon={faBootstrap}
               secondary
         />  
        <FontAwesomeIcon  
               className="iconFontAwesome--aboutMe" 
               icon={faLaptop}
               secondary
         />  


        </StyledBoxForSkills>

        

        <Title>My soft skills</Title>
       
        <FontAwesomeIcon  
               className="iconFontAwesome--aboutMe" 
               icon={faTasks}
               secondary
         />  

        <FontAwesomeIcon  
               className="iconFontAwesome--aboutMe" 
               icon={faGraduationCap}
               secondary
         />  
        <FontAwesomeIcon  
               className="iconFontAwesome--aboutMe" 
               icon={faRunning}
               secondary
         />  
        <FontAwesomeIcon  
               className="iconFontAwesome--aboutMe" 
               icon={faExclamationCircle}
               secondary
         />  
        <FontAwesomeIcon  
               className="iconFontAwesome--aboutMe" 
               icon={faTrophy}
               secondary
         />  
        </>
    )

}

export default Skills;