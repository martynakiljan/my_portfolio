import React, {useState} from 'react';
import Title from '../Titles/Title'
import IconsArrayHardSkills from '../Skills/Icons/IconsArrayHardSkills'
import IconsArraySoftSkills from '../Skills/Icons/IconsArraySoftSkills'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    SkillsSection, 
    InfoForSkills,
    ContainerForIcons,
    DescriptionForSkill,
} from './StyledSkillsContainer.styled'
import '../../style/App.css'




const Skills = () => {
    const [active, setActive] = useState(0);


    const handleClick = e => {
        console.log('ok')
        const index = parseInt(e.target.id, 0);
        console.log(index)
        if (index !== active) {
        setActive(index);
        }
    };



      const renderIconsHardSkills = () => {
            return IconsArrayHardSkills.map((data) => {
                return (
                 
                    <FontAwesomeIcon
                        icon={data.icon}
                        size="20px"
                        description = {data.description}
                        onMouseMove={handleClick}
                        active={active === data.id}
                        id={data.id}
                        className="iconFontAwesome--skill"
                        fixedWidth

                    />
                   
            
                );
               
            });
        };

        const renderIconsSoftSkills = () => {
            return IconsArraySoftSkills.map(item=> {
                return (
                   
                    <FontAwesomeIcon
                    icon={item.icon}
                    description = {item.description}
                    onMouseMove={handleClick}
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

           <ContainerForIcons>
           {renderIconsSoftSkills()}
           {renderDescriptionsSoftSkills()}
           </ContainerForIcons>

       </SkillsSection>


       
        
        </>
    )

}

export default Skills;