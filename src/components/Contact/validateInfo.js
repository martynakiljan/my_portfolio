

export default function validateInfo(values) {

    const errors = {}
    errors.length = 0

    if(!values.name.trim()) {
        errors.length+=1
        errors.name = 'Name is required!'
       
        
    }else if(values.name.length < 3) {
        errors.name = 'The first name usually has more than 2 letters'
        errors.length+=1
    }

    
    if(!values.email) {
        errors.email = 'Email required!'
        errors.length+=1
  
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
        errors.length+=1
        
 
    }
    if(!values.textarea) {
        errors.textarea = 'Message is required!'
        errors.length+=1
        
    }

    return errors;

}

