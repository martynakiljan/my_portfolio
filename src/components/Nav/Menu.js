import React from 'react';
import {
    MenuContainer,
    MenuList,
    MenuListItem,
    MenuLink, 
} from './MenuContainer.styled';

const Menu = () => {
    return (
 
    <MenuContainer>
    <MenuList >
        <MenuListItem>
            <MenuLink href="#home">home</MenuLink>
        </MenuListItem>
        <MenuListItem>
            <MenuLink href="#aboutme">about me</MenuLink>
        </MenuListItem>
        <MenuListItem>
            <MenuLink  href="#projects">projects</MenuLink>
        </MenuListItem>
        <MenuListItem>
            <MenuLink href="#skills">skills</MenuLink>
        </MenuListItem>
        <MenuListItem>
            <MenuLink href="#contact">contact</MenuLink>
        </MenuListItem>
    </MenuList>
    </MenuContainer>

 
    );
};


export default Menu;

