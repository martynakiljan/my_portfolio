
import React from 'react';
import {StyledForm, StyledInput, StyledLabel, StyledTextArea} from './StyledContactContainer.styled'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faPencilAlt, faAt} from "@fortawesome/free-solid-svg-icons";





const Form = () => {
    return (
     <StyledForm>



          <StyledLabel>
                <FontAwesomeIcon  
                className="iconFontAwesome--form" 
                icon={faPencilAlt}
                econdary
                />
                Name:
          </StyledLabel>
          <StyledInput></StyledInput>
        
          <StyledLabel>
              
        <FontAwesomeIcon  
               className="iconFontAwesome--form" 
               icon={faAt}
               secondary
         />
              Email:
         </StyledLabel>
              <StyledInput></StyledInput>



         <StyledLabel>

        <FontAwesomeIcon  
               className="iconFontAwesome--form" 
               icon={faCommentDots}
               secondary
         />
         Your message:
         
         </StyledLabel>


          <StyledTextArea name="description" value="This is a description." />
     </StyledForm>
    )
}

export default Form;