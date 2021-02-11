
import React, {useState} from 'react';
import {StyledNav, StyledCircleForIcon,StyledBoxForIcons, StyledButtonBackToTop} from './StyledNav.styled'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText, faHamburger, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import '../../style/App.css'
import Menu from './Menu'




const Nav = () => {

    const [isOpen, toggleMenuState] = useState(false);


    const handleMenu = event => {
        event.preventDefault();
        toggleMenuState(!isOpen);
    };

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
                        onClick={handleMenu}
                        />
                    </StyledCircleForIcon>
                    <Menu onClose={handleMenu} isOpen={isOpen} />

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