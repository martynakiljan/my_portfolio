import React from 'react';
import Title from '../Titles/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconsArrayHardSkills from '../Skills/Icons/IconsArrayHardSkills'
import IconsArraySoftSkills from '../Skills/Icons/IconsArraySoftSkills'
import {
    SkillsSection, 
    InfoForSkills
} from './StyledSkillsContainer.styled'

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
       <SkillsSection>

       <Title>My hard skills</Title>

        <InfoForSkills>click the icon!</InfoForSkills>

            {renderIconsHardSkills()}

       <Title>My soft skills</Title>

            {renderIconsSoftSkills()}

       </SkillsSection>


       
        
        </>
    )

}

export default Skills;