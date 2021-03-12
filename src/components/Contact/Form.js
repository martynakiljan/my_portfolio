
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faPencilAlt, faAt} from "@fortawesome/free-solid-svg-icons";
import {
     FormSection,
     Input, 
     Label, 
     TextArea,
     Button 
 } from './StyledContactContainer.styled'
import useForm from './useForm'
import validate from './validateInfo'


const Form = () => {


 const {handleChange, values, handleSubmit, errors} = useForm(validate)


    return (
     <FormSection onSubmit={handleSubmit}>

              <Label>
                <FontAwesomeIcon  
                className="iconFontAwesome--form" 
                icon={faPencilAlt}
                secondary
                />
                Name:
              </Label>
              <Input
               id="name"
               type="name"
               name="name"
               value={values.name}
               onChange={handleChange}></Input>
               {errors.name && <p className="error">{errors.name}</p>}
        
              <Label>
               <FontAwesomeIcon  
               className="iconFontAwesome--form" 
               icon={faAt}
          
               />
                Email:
               </Label>


               <Input
               id="email"
               type="email"
               name="email"
               value={values.email}
               onChange={handleChange}
               className="input"></Input>
               {errors.email && <p className="error">{errors.email}</p>}



         <Label>
               <FontAwesomeIcon  
               className="iconFontAwesome--form" 
               icon={faCommentDots}
               secondary
              />
              Your message:
         
          </Label>
          <TextArea
             id="textarea"
             type="textarea"
             name="textarea"
             value={values.textarea}
             onChange={handleChange}
             className="input"/>
          {errors.textarea && <p className="error">{errors.textarea}</p>}



               <Button onSubmit={handleSubmit}>send!</Button>
     </FormSection>
    )
}

export default Form;