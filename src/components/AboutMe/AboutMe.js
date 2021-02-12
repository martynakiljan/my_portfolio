import React from 'react';
import img from '../../images/img.jpg'
import Title from '../Titles/Title'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain, faBook, faPizzaSlice} from "@fortawesome/free-solid-svg-icons";
import {
      AboutMeSection,
      Image,
      TextAboutMe,
      BoxIcon,
      TextIcon
} from './StyledAboutMeContainer.styled.js'



const AboutMe = () => {




return (

   <AboutMeSection>
        <Title>About me</Title>
        <Image src={img} alt='image 1'/>
        <TextAboutMe>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.  </TextAboutMe>

        <BoxIcon>

        <FontAwesomeIcon  
               className="iconFontAwesome--aboutMe" 
               icon={faMountain}
               secondary
         />
         <TextIcon>because it is pain, but becaus</TextIcon>

        <FontAwesomeIcon  
               className="iconFontAwesome--aboutMe" 
               icon={faPizzaSlice}
               secondary
         />
         <TextIcon>because it is pain, but becaus</TextIcon>

        <FontAwesomeIcon  
               className="iconFontAwesome--aboutMe" 
               icon={faBook}
               secondary
         />
       <TextIcon>because it is pain, but becaus</TextIcon>


        </BoxIcon>
   </AboutMeSection>
)


}

export default AboutMe
