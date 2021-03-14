import React from 'react';
import myphoto from '../../images/myphoto.png'
import Title from '../Titles/Title'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain, faGlobeAmericas, faPizzaSlice} from "@fortawesome/free-solid-svg-icons";
import { RandomReveal } from 'react-random-reveal'
import {
      AboutMeSection,
      Image,
      TextAboutMe,
      BoxIcon,
      TextIcon,
      TextAbourtMeSecondary
} from './StyledAboutMeContainer.styled.js'



const AboutMe = () => {

return (
 <>
   <AboutMeSection id="aboutme" >
         
      <Title>About me</Title>
      <Image src={myphoto} alt='my photo'/>
      
      <TextAboutMe>My name is Martyna. I'm currently working in a restaurant, which has happened to me that I absolutely want to change industries. I saw an ad for making web pages, it made me curious. I bought one Udemy course, then a second, then a third ... and that's how it started. After a few courses, I realized that I needed a mentor and for 8 months I have been studying under the supervision of an experienced teacher 
      <br/>
      <br/>
      <TextAbourtMeSecondary>and so besides</TextAbourtMeSecondary>
      </TextAboutMe>  

      <BoxIcon>
      <FontAwesomeIcon  
      className="iconFontAwesome--aboutMe" 
      icon={faMountain}
      secondary
      />

      <TextIcon>
      <RandomReveal
      isPlaying
      duration={4.6}
      revealDuration={0.5}
      characters="I am mountain lover!"
      />
      </TextIcon>
         

      <FontAwesomeIcon  
      className="iconFontAwesome--aboutMe" 
      icon={faPizzaSlice}
      secondary
      />

      <TextIcon>
      <RandomReveal
      isPlaying
      duration={4.6}
      revealDuration={0.5}
      characters="I can't live without pizza"
      />
      </TextIcon>
       

      <FontAwesomeIcon  
      className="iconFontAwesome--aboutMe" 
      icon={faGlobeAmericas}
      secondary
      />

      <TextIcon>
      <RandomReveal
      isPlaying
      duration={4.6}
      revealDuration={0.5}
      characters="there is nothing better for me than exploring the world!"
      />
      
      </TextIcon>

      </BoxIcon>
   </AboutMeSection>
 </>
)


}

export default AboutMe
