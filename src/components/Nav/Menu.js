import React from 'react';
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    MenuElem,
    MenuListElem,
    MenuListItemElem,
    MenuLinkElem,
    MenuCloseElem
} from './MenuContainer.styled';

const Menu = ({ isOpen, onClose }) => {
    return (
 

   <MenuElem className="main-menu"  isOpen={isOpen}>
            <MenuCloseElem
                href=""
                onClick={onClose}
                isOpen={isOpen}
            >
            <FontAwesomeIcon  
               className="iconFontAwesome--menu" 
               icon={faTimesCircle}
               secondary
            />
            
            </MenuCloseElem>
            <MenuListElem isOpen={isOpen}>
                <MenuListItemElem>
                    <MenuLinkElem  href="#home">home</MenuLinkElem>
                </MenuListItemElem>
                <MenuListItemElem>
                    <MenuLinkElem href="#aboutme">About me</MenuLinkElem>
                </MenuListItemElem>
                <MenuListItemElem>
                    <MenuLinkElem  href="#projects">Projects</MenuLinkElem>
                </MenuListItemElem>
                <MenuListItemElem>
                    <MenuLinkElem href="#skills">Skills</MenuLinkElem>
                </MenuListItemElem>
                <MenuListItemElem>
                    <MenuLinkElem href="#contact">Contact</MenuLinkElem>
                </MenuListItemElem>
            </MenuListElem>
   </MenuElem>
 
    );
};


export default Menu;