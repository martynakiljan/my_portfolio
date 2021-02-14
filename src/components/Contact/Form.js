
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faPencilAlt, faAt} from "@fortawesome/free-solid-svg-icons";
import {
     FormSection,
     Input, 
     Label, 
     TextArea
 } from './StyledContactContainer.styled'
import useForm from './useForm'
import validate from './validateInfo'


const Form = () => {


 const {handleChange, values, handleSubmit, errors} = useForm(validate)


    return (
     <form onSubmit={handleSubmit}>

          <Label>
                <FontAwesomeIcon  
                className="iconFontAwesome--form" 
                icon={faPencilAlt}
                secondary
                />
                Name:
          </Label>
          <input 
               id="name"
               type="name"
               name="name"
               placeholder="your name" 
               value={values.name}
               onChange={handleChange}></input>
               {errors.name && <p className="error">{errors.name}</p>}
        
          <Label>
               <FontAwesomeIcon  
               className="iconFontAwesome--form" 
               icon={faAt}
          
               />
                Email:
               </Label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="your Email"
            value={values.email}
            onChange={handleChange}
            className="input"></input>
                 {errors.email && <p className="error">{errors.email}</p>}



         <Label>
               <FontAwesomeIcon  
               lassName="iconFontAwesome--form" 
               icon={faCommentDots}
               secondary
              />
              Your message:
         
          </Label>
          <textarea
             id="textarea"
             type="textarea"
             name="textarea"
             placeholder="your title of message"
             value={values.textarea}
             onChange={handleChange}
             className="input"/>
                {errors.email && <p className="error">{errors.email}</p>}



               <button onSubmit={handleSubmit}>send</button>
     </form>
    )
}

export default Form;