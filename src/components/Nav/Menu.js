import React from 'react';

import {
    MenuElem,
    MenuListElem,
    MenuListItemElem,
    MenuLinkElem,
   
} from './MenuContainer.styled';

const Menu = () => {
    return (
 
    <MenuElem >
            <MenuListElem >
                <MenuListItemElem>
                    <MenuLinkElem href="#home">home</MenuLinkElem>
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

