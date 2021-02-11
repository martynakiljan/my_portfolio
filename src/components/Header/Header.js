
import React from 'react';
import {StyledMainTitle,StyledDiv, StyledLine, StyledDot, StyledHeader} from './StyledMainTitle'
import { Typewriter } from 'react-typewriting-effect'



const Header = () => {
  return (

      <StyledHeader>
            <StyledMainTitle> he </StyledMainTitle>

          <StyledDiv>
              <StyledMainTitle secondary> llo </StyledMainTitle>   <StyledDot/> 
          </StyledDiv>

          <Typewriter
            string='I`m Martyna and I`m looking for my first job junior fron end developer!'
            delay={80}
            cursor='_'
            />
          


          <StyledLine/>

        
      </StyledHeader>


  )
}

export default Header;
