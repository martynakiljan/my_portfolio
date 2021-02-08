
import React from 'react';
import {StyledMainTitle,  StyledSecondaryTitle, StyledBoxForSecondaryTitle,StyledDiv, StyledHeader} from './StyledMainTitle'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <StyledHeader>
      
      <StyledMainTitle> he </StyledMainTitle>
  
        <StyledBoxForSecondaryTitle>
        <StyledMainTitle secondary> llo   </StyledMainTitle> 
        
        <StyledDiv>
        <FontAwesomeIcon   className="iconFontAwesomeCircle"  icon={faCircle}></FontAwesomeIcon>
        </StyledDiv>
  
    </StyledBoxForSecondaryTitle>


       <StyledSecondaryTitle>
        I'm Martyna. I'm looking for a job as a junior programmer 
        </StyledSecondaryTitle> 

    
      </StyledHeader>
  )
}

export default Header;
