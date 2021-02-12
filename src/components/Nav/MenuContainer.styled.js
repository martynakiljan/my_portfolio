import styled, { css } from 'styled-components';


const FixedPosition = css`
    @supports (position: fixed) {
        position: fixed;
    }
`;

const MenuLinkElem = styled.a`
    &:hover,
    &:focus {
        text-decoration: underline;
    }
`;

const MenuCloseElem = styled.a`

    position: absolute;
    color: black;
    left: 10px;
    top: 0px;
    z-index: ${props => (props.isOpen ? 1001 : 'initial')};
`;

const MenuListElem = styled.ul`
    ${props =>
        props.isOpen &&
        css`
            position: relative;
            z-index: 1000;
        `};

    width: 100%;
    list-style: none;
    align-self: center;
`;

const MenuListItemElem = styled.li``;

const MenuElem = styled.nav`
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  ${FixedPosition};
  display: none;
  left: 0;
  top: -100vh;
  height: 100%;
  overflow-y: scroll;
  overflow-x: visible;
  transition: top 0.9s ease;
  z-index: 999;

  ${props =>
      props.isOpen &&
      css`
          display: flex;
          width: 100vw;
          height: 40vh;
          left: 0;
          top: 0;
          outline: none;
          background: white;
      `}




  a {
    display: block;
    padding: 0.75em 15px;
    line-height: 1em;
    font-size: 1.5em;
    color: black;
    text-decoration: none;

  }
`;

const MenuToggleElem = styled.a`
    display: inline-block;
    padding: 0.75em 15px;
    line-height: 1em;
    font-size: 1.5em;
    color: #333;

    &:hover,
    &:focus {
        color: #c00;
    }

`;

export {
    MenuCloseElem,
    MenuElem,
    MenuListElem,
    MenuListItemElem,
    MenuLinkElem,
    MenuToggleElem
};
