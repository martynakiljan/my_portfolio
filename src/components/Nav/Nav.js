
import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText, faHamburger} from "@fortawesome/free-solid-svg-icons";
import '../../style/App.css'
import Menu from './Menu'
import {
     NavSection,
     CircleForIcon,
     BoxForIcons, 
    } from './StyledNavContainer.styled'
import ButtonBackToTop from './ButtonBackToTop';


const Nav = () => {

    const [isOpen, toggleMenuState] = useState(false);


    const handleMenu = event => {
        event.preventDefault();
        toggleMenuState(!isOpen);
    };

    return (
        <NavSection>
            <BoxForIcons>
                    <CircleForIcon href="#contact"> 
                        <FontAwesomeIcon  
                        className="iconFontAwesome--nav" 
                        icon={faEnvelopeOpenText}
                        secondary
                        href="#contact"
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

                    <ButtonBackToTop scrollStepInPx="50" delayInMs="16.66"/>
            
            </BoxForIcons>
        </NavSection>
    )

}

export default Nav