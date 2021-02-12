import React from 'react';
import {StyledBoxForSkills, StyledInfoForSkills} from './StyledSkills.styled'
import Title from '../Titles/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconsArrayHardSkills from '../Skills/Icons/IconsArrayHardSkills'
import IconsArraySoftSkills from '../Skills/Icons/IconsArraySoftSkills'

const Skills = () => {

      const renderIconsHardSkills = () => {
            return IconsArrayHardSkills.map((data) => {
                return (
                    <FontAwesomeIcon
                        icon={data.icon}
                        className="iconFontAwesome--skill"
                        secondary
                    />
                );
            });
        };
      const renderIconsSoftSkills = () => {
            return IconsArraySoftSkills.map((data) => {
                return (
                    <FontAwesomeIcon
                        icon={data.icon}
                        className="iconFontAwesome--skill"
                        secondary
                    />
                );
            });
        };
 
 return (
        <>
       <StyledBoxForSkills>

       <Title>My hard skills</Title>

        <StyledInfoForSkills>click the icon!</StyledInfoForSkills>

            {renderIconsHardSkills()}

      <Title>My soft skills</Title>

            {renderIconsSoftSkills()}

       </StyledBoxForSkills>


       
        
        </>
    )

}

export default Skills;