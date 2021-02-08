import styled, {css} from 'styled-components';

export const StyledNav = styled.div`
  z-index: 1000;
  display: flex;
  position: sticky;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.mainColor};
  width: 60%;
  margin-left: 37%;
  min-height: 10vh;
  
 
`;


export const FontAwesomeIcon  = styled.a`
  color: ${({ theme }) => theme.mainColorGray};
  width: 100%;
  font-size: 50px;
  background: red;
  width: 15px;
  border: 2px solid #FF9292;
  border-radius: 50%;


`;

export const StyledCircleForIcon  = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.mainColorPastel};
  width: 65px;
  height: 65px;
  border: 4px solid #FF9292;
  border-radius: 50%;
  margin-left: 0px;

  

`;
  
