import styled, {css} from 'styled-components';

export const StyledNav = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.mainColor};
  margin: 0 auto;
  width: 100%;
  min-height: 10vh;
 
`;


export const FontAwesomeIcon  = styled.a`
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${({ theme }) => theme.mainColorGray};
  width: 100%;
  font-size: 50px;
  background: red;
  width: 15px;
  border: 2px solid #FF9292;
  border-radius: 50%;
`;

export const StyledCircleForIcon  = styled.div`
  position: absolute;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.mainColorPastel};
  width: 65px;
  height: 65px;
  border: 4px solid #FF9292;
  border-radius: 50%;

  ${({ secondary }) =>
    secondary &&
    css`
      right: 200px;
    `}

`;
  
