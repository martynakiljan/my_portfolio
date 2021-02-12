
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faPencilAlt, faAt} from "@fortawesome/free-solid-svg-icons";
import {
     FormSection,
     Input, 
     Label, 
     TextArea
 } from './StyledContactContainer.styled'




const Form = () => {
    return (
     <FormSection>

          <Label>
                <FontAwesomeIcon  
                className="iconFontAwesome--form" 
                icon={faPencilAlt}
                secondary
                />
                Name:
          </Label>
          <Input></Input>
        
          <Label>
               <FontAwesomeIcon  
               className="iconFontAwesome--form" 
               icon={faAt}
               secondary
               />
                Email:
               </Label>
          <Input></Input>



         <Label>
               <FontAwesomeIcon  
               lassName="iconFontAwesome--form" 
               icon={faCommentDots}
               secondary
              />
              Your message:
         
          </Label>
          <TextArea />
     </FormSection>
    )
}

export default Form;