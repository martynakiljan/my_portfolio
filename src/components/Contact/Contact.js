
import React from 'react';
import Title from '../Titles/Title'
import Form from './Form'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faGithubAlt, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {
    TextForContact,
    AnotherFormContact,
    ContactSection,
    StyledLink
} from './StyledContactContainer.styled'



const Contact = () => {
    return (
     <ContactSection id="contact">
            <Title>Contact</Title>
            <TextForContact>I will be very pleased if you contact me! </TextForContact>

            <Form/>
            <TextForContact> or </TextForContact>
            <AnotherFormContact>


         <StyledLink href="https://github.com/martynakil">
         <FontAwesomeIcon 
            className="iconFontAwesome--contact" 
            icon={faGithubAlt}
            secondary
            />
        </StyledLink>


          <StyledLink href="https://www.linkedin.com/in/martyna-kiljan-03a7a71a9/">
         <FontAwesomeIcon  
              className="iconFontAwesome--contact" 
              icon={faLinkedin}
              secondary
            />
         </StyledLink>


          <StyledLink href="https://www.facebook.com/martyna.kiljan/">
            <FontAwesomeIcon  
              className="iconFontAwesome--contact" 
              icon={faFacebook}
              secondary
            />
          </StyledLink>
                
            </AnotherFormContact>

  
          
     </ContactSection>
    )
}

export default Contact;