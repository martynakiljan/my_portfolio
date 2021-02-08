
import React  from 'react';
import {StyledNav, StyledCircleForIcon} from './StyledNav.styled'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText, faHamburger } from "@fortawesome/free-solid-svg-icons";
import '../../style/App.css'



const Nav = () => {

    return (
        <StyledNav>
          <StyledCircleForIcon> 
               <FontAwesomeIcon  
               className="iconFontAwesome" 
               icon={faEnvelopeOpenText}
               secondary
               />
           </StyledCircleForIcon>


          <StyledCircleForIcon secondary>
              <FontAwesomeIcon
              className="iconFontAwesome" 
              icon={faHamburger}
              />
            </StyledCircleForIcon>

        </StyledNav>
    )

}

export default Nav