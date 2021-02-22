import React, {useEffect} from 'react';
import {StyledTitle} from './StyledTitle.styled'
import Aos from 'aos'
import "aos/dist/aos.css"


const Title= ({children}) => {
    useEffect(() => {
        Aos.init({duration: 1000});
      }, [])
    
    return (
       

          <StyledTitle data-aos="fade-right">{children}</StyledTitle>
       
    )

}


export default Title;