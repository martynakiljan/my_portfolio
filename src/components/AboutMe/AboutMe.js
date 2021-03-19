import React from 'react';
import myphoto from '../../data/images/myphoto.png'
import Title from '../Titles/Title'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain, faGlobeAmericas, faPizzaSlice} from "@fortawesome/free-solid-svg-icons";

import {
      AboutMeSection,
      Image,
      TextAboutMe,
      BoxIcon,
      TextIcon,
      TextAbourtMeSecondary,
      TextAboutMeBottom,
      Box
} from './StyledAboutMeContainer.styled.js'



const AboutMe = () => {

return (
 <>
   <AboutMeSection id="aboutme" >
         
      <Title>About me</Title>
      <Image src={myphoto} alt='my photo'/>
      
      <TextAboutMe>
      My name is Martyna. My current job circumstances forced me to change the work industry. I am currently working as a waitress in a restaurant, although I enjoy the job, I know that I don’t want to run around with plates for the rest of my life. Accidentally, I came across an advertisement for creating websites. Out of curiosity I bought the ‘web developer from scratch’ course and completely lost myself in it. I’ve been studying for 1.5 years. For 7 months I’ve been learning by myself and for 8 months I’ve been learning under the supervision of an experienced mentor. Sometimes it was very hard to work in restaurant, not social hours, while studying and learning programming but it was for sure worth it. Now it's time to look for an apprenticeship ...
     
      <TextAboutMeBottom>I want to develop!ツ</TextAboutMeBottom>
    
      <TextAbourtMeSecondary>and so besides</TextAbourtMeSecondary>
      </TextAboutMe>  

      <BoxIcon>
        <Box>
          <FontAwesomeIcon
            className="iconFontAwesome--aboutMe" 
            icon={faMountain}
            secondary
            />
            <TextIcon>
             I am mountain lover!
          </TextIcon>
        </Box>

        <Box>
          <FontAwesomeIcon  
          className="iconFontAwesome--aboutMe" 
          icon={faGlobeAmericas}
          secondary
          />
          <TextIcon>
            there is nothing better for me than exploring the world!
          </TextIcon>
        </Box>


        <Box>
          <FontAwesomeIcon  
          className="iconFontAwesome--aboutMe" 
          icon={faPizzaSlice}
          secondary
          />
          <TextIcon>
          I can't live without pizza
          </TextIcon>
        </Box>
        
      </BoxIcon>
   </AboutMeSection>
 </>
)


}

export default AboutMe
