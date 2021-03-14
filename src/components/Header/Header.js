
import React from 'react';
import { Typewriter } from 'react-typewriting-effect'
import {
  MainTitle,
  Div, 
  DecorativeLine, 
  Dot, 
  HeaderSection,
  ParentForTypewriter
} from './StyledHeaderContainer.styled'


const Header = () => {
  return (

      <HeaderSection id="home">

        <MainTitle> he </MainTitle>

        <Div>
            <MainTitle secondary> llo <Dot/> </MainTitle>
        </Div>

        <ParentForTypewriter>
        <Typewriter
            string='I am Martyna, I aspire to be junior front-end developer!'
            delay={80}
            cursor='|'   
          />
        </ParentForTypewriter>
        
        <DecorativeLine/>
 
      </HeaderSection>

  )
}

export default Header;
