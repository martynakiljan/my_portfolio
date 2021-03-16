import React, {useState} from 'react';
import Title from '../Titles/Title'
import IconsArrayHardSkills from '../../Data/Icons/IconsArrayHardSkills'
import IconsArraySoftSkills from '../../Data/Icons/IconsArraySoftSkills'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SiRedux, SiStyledComponents} from "react-icons/si";
import {
    SkillsSection, 
    InfoForSkills,
    ContainerForIcons,
    DescriptionForSkill,
    ContainerForIconsSecondary
} from './StyledSkillsContainer.styled'
import '../../style/App.css'



const Skills = () => {
    const [active, setActive] = useState(0);


    const handleClick = e => {
        console.log('klik')
        const index = parseInt(e.target.id, 0);
        if (index !== active) {
        setActive(index);
        }
    };


    const renderIconsHardSkills = () => {
     return IconsArrayHardSkills.map((data) => {
          if(data.isAnotherPackageIcons) {
                    
            return (
          <span
          onMouseEnter={handleClick}
          active={active === data.id}
          id={data.id}>
              <SiStyledComponents
            size="50px"
            description = {data.description}
            onMouseEnter={handleClick}
            active={active === data.id}
            id={data.id}
            className="iconFontAwesome--skill icon"
            fixedWidth
            />
          </span>
            )

          }

        if(data.isReactIcon) {
            
            return (
          <span
          onMouseEnter={handleClick}
          active={active === data.id}
          id={data.id}
          >  <SiRedux
          size="35px"
          description = {data.description}
          className="iconFontAwesome--skill icon"
          fixedWidth
          />  </span>

            )

        }
        return (
        
         <span
         onMouseEnter={handleClick}
         className="span"
         active={active === data.id}
         id={data.id}>
            <FontAwesomeIcon
            icon={data.icon}
            size="20px"
            description = {data.description}
            onMouseEnter={handleClick}
            active={active === data.id}
            id={data.id}
            className="iconFontAwesome--skill icon"
            fixedWidth
            />
         </span>

        );
               
      });
     };

        const renderIconsSoftSkills = () => {
         return IconsArraySoftSkills.map(item=> {
            return (
                   
            <FontAwesomeIcon
            icon={item.icon}
            description = {item.description}
            onMouseEnter={handleClick}
            active={active === item.id}
            id={item.id}
            className="iconFontAwesome--skill"
            fixedWidth
            />
            )
         })
        }



    function renderDescriptionsHardSkills() {
        return IconsArrayHardSkills.map(data => {
            return (
              <DescriptionForSkill
              active={active === data.id}
              content={data.description}>
              {data.description}
              </DescriptionForSkill>
              
            )
          })
        }




      function renderDescriptionsSoftSkills() {
        return IconsArraySoftSkills.map((item) => {
             return (
                <DescriptionForSkill
                active={active === item.id}
                content={item.description}>
                {item.description}
                </DescriptionForSkill>
             )
            });
        };
 
 return (
        <>
       <SkillsSection  id="skills">
     
       <Title>My hard skills</Title>

       <InfoForSkills>click the icon!</InfoForSkills>

       <ContainerForIcons>
   
        {renderIconsHardSkills()}
        {renderDescriptionsHardSkills()}
        </ContainerForIcons>
    
       <Title>My soft skills</Title>

        <ContainerForIconsSecondary>
        {renderIconsSoftSkills()}
        {renderDescriptionsSoftSkills()}
        </ContainerForIconsSecondary>

       </SkillsSection>
       
        </>
    )

}

export default Skills;