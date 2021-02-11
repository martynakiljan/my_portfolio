import React from 'react';
import {StyledBoxForSkills, StyledInfoForSkills} from './StyledSkills.styled'
import Title from '../Titles/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faNpm, faJs, faCss3Alt, faGithub, faHtml5 , faReact, faBootstrap} from "@fortawesome/free-brands-svg-icons"
// import { faBox, faTasks, faGraduationCap, faRunning, faLaptop, faExclamationCircle, faTrophy } from "@fortawesome/free-solid-svg-icons";
import IconsArray from '../../Icons/IconsArray'

const Skills = () => {


    return (
        <>
        <Title>My hard skills</Title>
        <StyledInfoForSkills>click the icon!</StyledInfoForSkills>


        <StyledBoxForSkills>


              {IconsArray.map((icon) => {
                      <FontAwesomeIcon  
                      className="iconFontAwesome--skill" 
                      icon={icon}
                     /> 
              })}

{/* 
         <FontAwesomeIcon  
               className="iconFontAwesome--skill" 
               icon={faNpm}
               secondary
         />  
        <FontAwesomeIcon  
               className="iconFontAwesome--skill" 
               icon={faJs}
               secondary
         />

        <FontAwesomeIcon  
               className="iconFontAwesome--skill" 
               icon={faCss3Alt}
               secondary
         />  

        <FontAwesomeIcon  
               className="iconFontAwesome--skill" 
               icon={faGithub}
               secondary
         />  
        <FontAwesomeIcon  
               className="iconFontAwesome--skill" 
               icon={faHtml5}
               secondary
         />  
        <FontAwesomeIcon  
               className="iconFontAwesome--skill" 
               icon={faReact}
               secondary
         />  
        <FontAwesomeIcon  
               className="iconFontAwesome--skill" 
               icon={faBox}
               secondary
         />  
        <FontAwesomeIcon  
               className="iconFontAwesome--skill" 
               icon={faBootstrap}
               secondary
         />  
        <FontAwesomeIcon  
               className="iconFontAwesome--skill" 
               icon={faLaptop}
               secondary
         />  


        </StyledBoxForSkills>

        

      //   <Title>My soft skills</Title>
        <StyledBoxForSkills>
        <FontAwesomeIcon  
               className="iconFontAwesome--skill" 
               icon={faTasks}
               secondary
         />  

        <FontAwesomeIcon  
               className="iconFontAwesome--skill" 
               icon={faGraduationCap}
               secondary
         />  
        <FontAwesomeIcon  
               className="iconFontAwesome--skill" 
               icon={faRunning}
               secondary
         />  
        <FontAwesomeIcon  
               className="iconFontAwesome--skill" 
               icon={faExclamationCircle}
               secondary
         />  
        <FontAwesomeIcon  
               className="iconFontAwesome--skill" 
               icon={faTrophy}
               secondary
         />   */}
        </StyledBoxForSkills>
       
        
        </>
    )

}

export default Skills;