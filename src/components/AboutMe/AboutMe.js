import React from 'react';
import myphoto from '../../images/myphoto.png'
import Title from '../Titles/Title'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain, faGlobeAmericas, faPizzaSlice} from "@fortawesome/free-solid-svg-icons";
import {
      AboutMeSection,
      Image,
      TextAboutMe,
      BoxIcon,
      TextIcon
} from './StyledAboutMeContainer.styled.js'




const AboutMe = () => {




return (

   <AboutMeSection id="aboutme" >
         
        <Title>About me</Title>
        <Image src={myphoto} alt='image 1'/>

    <TextAboutMe>My name is Martyna. I'm currently working in a restaurant, which has happened to me that I absolutely want to change industries. I saw an ad for making web pages, it made me curious. I bought one Udemy course, then a second, then a third ... and that's how it started. After a few courses, I realized that I needed a mentor and for 8 months I have been studying under the supervision of an experienced teacher 
              <br/>
              <br/>
              and so besides
        </TextAboutMe>

       

        <BoxIcon>

        <FontAwesomeIcon  
               className="iconFontAwesome--aboutMe" 
               icon={faMountain}
               secondary
         />
         <TextIcon>I love hiking in the mountains!</TextIcon>

        <FontAwesomeIcon  
               className="iconFontAwesome--aboutMe" 
               icon={faPizzaSlice}
               secondary
         />
         <TextIcon>I can't live without pizza</TextIcon>

        <FontAwesomeIcon  
               className="iconFontAwesome--aboutMe" 
               icon={faGlobeAmericas}
               secondary
         />
       <TextIcon>there is nothing better for me than exploring the world!</TextIcon>


        </BoxIcon>
   </AboutMeSection>
)


}

export default AboutMe
