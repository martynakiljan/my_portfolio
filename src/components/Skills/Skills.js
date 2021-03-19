import React, {useState} from 'react';
import Title from '../Titles/Title'
import IconsArrayHardSkills from '../../data/icons/IconsArrayHardSkills'
import IconsArraySoftSkills from '../../data/icons/IconsArraySoftSkills'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SiJest, SiRedux, SiStyledComponents} from "react-icons/si";
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
        const index = parseInt(e.currentTarget.id, 0);
        if (index !== active) {
        setActive(index);
        }
    };


    const renderIconsHardSkills = () => {
     return IconsArrayHardSkills.map((data) => {
          if(data.isAnotherPackageIcons) {
                    
            return (
              <button
              onMouseEnter={handleClick}
              className="btnIcon"
              active={active === data.id}
              description = {data.description}
              id={data.id}>
                <SiStyledComponents
                size="50px"
                margin= "5px"
                className="iconFontAwesome--skill icon"
                fixedWidth
                />
               </button>
            )

          }

        if(data.isReactIcon) {
            
            return (
          <button
          onMouseEnter={handleClick}
          className="btnIcon"
          active={active === data.id}
          description = {data.description}
          id={data.id}>  
            <SiRedux
            size="35px"
            margin= "5px"
            className="iconFontAwesome--skill icon"
            fixedWidth
            />  
        
          </button>

          )

        } else if(data.isReactIconTwo) {
         return (
          <button
          onMouseEnter={handleClick}
          className="btnIcon"
          active={active === data.id}
          description = {data.description}
          id={data.id}>  
            <SiJest
            size="35px"
            margin= "5px"
            className="iconFontAwesome--skill icon"
            fixedWidth
            />  
        
          </button>
         )

        }
        return (
        
         <button
         onMouseEnter={handleClick}
         className="btnIcon"
         active={active === data.id}
         description = {data.description}
         id={data.id}>
          <FontAwesomeIcon
            icon={data.icon}
            size="20px"
            className="iconFontAwesome--skill icon"
            fixedWidth
          />
         </button>

        );
               
      });
     };

        const renderIconsSoftSkills = () => {
         return IconsArraySoftSkills.map(item=> {
            return (
          <button
            className="btnIcon--soft"
            onMouseEnter={handleClick}
            active={active === item.id}
            description = {item.description}
            id={item.id}>
             <FontAwesomeIcon
              icon={item.icon}
              className="iconFontAwesome--skill"
              fixedWidth
              />
          </button>
                     
           
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