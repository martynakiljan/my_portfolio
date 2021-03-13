

import {useState} from 'react'

import sendEmail from './sendEmail'

const useForm = (validate) => {



    const [values, setValues] = useState({
       name: '',
       email: '',
       textarea: '',
    })
    const [errors, setErrors] = useState({})

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
     

        const err = validate(values);
        setErrors(err)

    
        if(err.length === 0) {
            sendEmail(e)
                .then((result) => {
                    console.log(result)
                    e.target.result()
                
                }, (error) => {
                    console.log(error.text);
                });

                
            window.alert('Thanks for your message! :)')
            setValues({
               name: '',
               email: '',
               textarea: '',

            })
            
         
        }
        
      
    }



    return { handleChange, handleSubmit, values, errors };
}

export default useForm;