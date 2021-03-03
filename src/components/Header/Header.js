
import React from 'react';
import { Typewriter } from 'react-typewriting-effect'
import {
  MainTitle,
  Div, 
  DecorativeLine, 
  Dot, 
  HeaderSection,
} from './StyledHeaderContainer.styled'



const Header = () => {
  return (

      <HeaderSection id="home">
     
          <MainTitle> he </MainTitle>

          <Div>
              <MainTitle secondary> llo </MainTitle>   <Dot/> 
          </Div>

          <Typewriter
            string='I`m Martyna and I`m looking for my first job junior fron end developer!'
            delay={80}
            cursor='_'
           
          />
          
       
          <DecorativeLine/>

        
      </HeaderSection>
  
 

  )
}

export default Header;
