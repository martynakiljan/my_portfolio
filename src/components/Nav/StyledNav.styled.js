import styled from 'styled-components';

export const StyledNav = styled.nav`
  z-index: 1000;
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.mainColor};
  width: 100%;
  height: 10vh;
  
 
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
  width: 55px;
  height: 55px;
  border: 4px solid #FF9292;
  border-radius: 50%;
  margin-left: 0px;


  

`;
  
export const StyledBoxForIcons  = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-around;
  margin-left: 40%;

  

`;
  
export const  StyledButtonBackToTop = styled.div`
    position: fixed;
    bottom: -48px;
    right: -50px;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: ${({ theme }) => theme.mainColorPastel};
    width: 100px;
    height: 100px;
    padding: 23px;
    border: none;
    border-radius: 50%;
    color: #fff;
    font-size: 1rem;
    opacity: 1;
  

`;
  
