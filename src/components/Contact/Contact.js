
import React from 'react';
import Title from '../Titles/Title'
import {StyledTextForContact, StyledAnotherFormContact} from './StyledContactContainer.styled'
import Form from './Form'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faGithubAlt, faLinkedin} from "@fortawesome/free-brands-svg-icons"



const Contact = () => {
    return (
     <>
            <Title>Contact</Title>
            <StyledTextForContact>I will be very pleased if you contact me! </StyledTextForContact>

            <Form/>
            <StyledTextForContact> or </StyledTextForContact>
            <StyledAnotherFormContact>

            <FontAwesomeIcon  
               className="iconFontAwesome--contact" 
               icon={faGithubAlt}
               secondary
            />
            <FontAwesomeIcon  
                className="iconFontAwesome--contact" 
                icon={faLinkedin}
                secondary
            />
            <FontAwesomeIcon  
                className="iconFontAwesome--contact" 
                icon={faFacebook}
                secondary
            />
                
            </StyledAnotherFormContact>


        
          
     </>
    )
}

export default Contact;