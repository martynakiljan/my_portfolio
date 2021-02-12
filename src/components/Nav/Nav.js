
import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText, faHamburger, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import '../../style/App.css'
import Menu from './Menu'
import {
     NavSection,
     CircleForIcon,
     BoxForIcons, 
     ButtonBackToTop
    } from './StyledNavContainer.styled'



const Nav = () => {

    const [isOpen, toggleMenuState] = useState(false);


    const handleMenu = event => {
        event.preventDefault();
        toggleMenuState(!isOpen);
    };

    return (
        <NavSection>
            <BoxForIcons>
                    <CircleForIcon> 
                        <FontAwesomeIcon  
                        className="iconFontAwesome--nav" 
                        icon={faEnvelopeOpenText}
                        secondary
                        />
                   </CircleForIcon>
                 

                   <CircleForIcon secondary>
                        <FontAwesomeIcon
                        className="iconFontAwesome--nav" 
                        icon={faHamburger}
                        onClick={handleMenu}
                        />
                    </CircleForIcon>
                    <Menu onClose={handleMenu} isOpen={isOpen} />

                    <ButtonBackToTop>
                        <FontAwesomeIcon
                        className="iconFontAwesome--backToTop" 
                        icon={faChevronUp}
                            
                        />
                        
                        
                    </ButtonBackToTop>

            </BoxForIcons>
        </NavSection>
    )

}

export default Nav