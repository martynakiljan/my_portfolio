
import React from 'react';
import Title from '../Titles/Title'
import Form from './Form'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faGithubAlt, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {
    TextForContact,
    AnotherFormContact,
    ContactSection
    } from './StyledContactContainer.styled'



const Contact = () => {
    return (
     <ContactSection>
            <Title>Contact</Title>
            <TextForContact>I will be very pleased if you contact me! </TextForContact>

            <Form/>
            <TextForContact> or </TextForContact>
            <AnotherFormContact>

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
                
            </AnotherFormContact>

  
          
     </ContactSection>
    )
}

export default Contact;