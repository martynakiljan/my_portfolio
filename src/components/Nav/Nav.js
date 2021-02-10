
import React  from 'react';
import {StyledNav, StyledCircleForIcon,StyledBoxForIcons, StyledButtonBackToTop} from './StyledNav.styled'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText, faHamburger, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import '../../style/App.css'




const Nav = () => {

    return (
        <StyledNav>
            <StyledBoxForIcons>
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

                    <StyledButtonBackToTop>
                        <FontAwesomeIcon
                            className="iconFontAwesome--backToTop" 
                            icon={faChevronUp}
                        />
                        
                    </StyledButtonBackToTop>

            </StyledBoxForIcons>
        </StyledNav>
    )

}

export default Nav