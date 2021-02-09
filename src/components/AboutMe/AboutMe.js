import React from 'react';
import {StyledAboutMeTitle, StyledContainerAboutMe, StyledImage,StyledTextAboutMe, StyledBoxIcon, StyledTextIcon} from './StyledAboutMe.styled'
import img from '../../images/img.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain, faBook, faPizzaSlice} from "@fortawesome/free-solid-svg-icons";





const AboutMe = () => {
return (

   <StyledContainerAboutMe>
        <StyledAboutMeTitle>About me</StyledAboutMeTitle>
        <StyledImage src={img} alt='image 1'/>
        <StyledTextAboutMe>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.  </StyledTextAboutMe>

        <StyledBoxIcon>

        <FontAwesomeIcon  
               className="iconFontAwesome--aboutMe" 
               icon={faMountain}
               secondary
         />
         <StyledTextIcon>because it is pain, but becaus</StyledTextIcon>

        <FontAwesomeIcon  
               className="iconFontAwesome--aboutMe" 
               icon={faPizzaSlice}
               secondary
         />
         <StyledTextIcon>because it is pain, but becaus</StyledTextIcon>

        <FontAwesomeIcon  
               className="iconFontAwesome--aboutMe" 
               icon={faBook}
               secondary
         />
       <StyledTextIcon>because it is pain, but becaus</StyledTextIcon>


        </StyledBoxIcon>
   </StyledContainerAboutMe>
)


}

export default AboutMe
