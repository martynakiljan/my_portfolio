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
            <MenuLinkElem href="#aboutme">about me</MenuLinkElem>
        </MenuListItemElem>
        <MenuListItemElem>
            <MenuLinkElem  href="#projects">projects</MenuLinkElem>
        </MenuListItemElem>
        <MenuListItemElem>
            <MenuLinkElem href="#skills">skills</MenuLinkElem>
        </MenuListItemElem>
        <MenuListItemElem>
            <MenuLinkElem href="#contact">contact</MenuLinkElem>
        </MenuListItemElem>
    </MenuListElem>
    </MenuElem>

 
    );
};


export default Menu;

