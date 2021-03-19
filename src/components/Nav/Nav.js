
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText, faHamburger, faTimes} from "@fortawesome/free-solid-svg-icons";
import '../../style/App.css'
import Menu from './Menu'
import {
     NavSection,
     CircleForIcon,
     BoxForIcons, 
} from './StyledNavContainer.styled'

import ButtonBackToTop from './ButtonBackToTop';


class Nav extends React.Component{

    container = React.createRef();

    state = {
      open: false,
    };


    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            open: false,
          });
        }
    };

      handleButtonClick = () => {
        this.setState(state => {
          return {
            open: !state.open,
          };
        });
      };

      render() {
          return (
              <>
            
               <NavSection ref={this.container} >
                  <BoxForIcons>
                  <CircleForIcon href="#contact"> 
                    <FontAwesomeIcon  
                    className="iconFontAwesome--nav" 
                    icon={faEnvelopeOpenText}
                    secondary
                    href="#contact"
                    />
                  </CircleForIcon>
              
                  {this.state.open ? 
                    <FontAwesomeIcon
                    className="iconFontAwesome--close" 
                    icon={faTimes}
                    onClick={this.handleButtonClick}
                    /> :  
                      
                    <CircleForIcon>
                    <FontAwesomeIcon
                    className="iconFontAwesome--nav secondary" 
                    icon={faHamburger}
                    onClick={this.handleButtonClick}
                    />

                  </CircleForIcon>
                }

                  {this.state.open  && (
                  <Menu  />
                  )}
            
                <ButtonBackToTop />
                        
                </BoxForIcons>
             </NavSection>
        </>
    
    )
 }




}

export default Nav;
