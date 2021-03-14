import styled, {keyframes} from 'styled-components';



export const NavSection = styled.nav`
  z-index: 100;
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 10vh;
  
 
`;

const move = keyframes`
   0% {
        transform: scale(1,1);
    }
    50% {
        transform: scale(1.2,1.2);
    }
    100% {
        transform: scale(1,1);
    }
`;



export const FontAwesomeIcon  = styled.a`
  color: ${({ theme }) => theme.mainColorGray};
  width: 100%;
  font-size: 60px;
  background: red;
  width: 15px;
  border: 2px solid #FF9292;
  border-radius: 50%;
  

`;




export const CircleForIcon  = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.mainColorPastel};
  width: 60px;
  height: 60px;
  border: 4px solid #FF9292;
  border-radius: 50%;
  margin-left: 0px;
  animation: ${move} 1s linear;
 


`;
  
export const BoxForIcons  = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-around;
  margin-left: 40%;

  

`;
  


const moveTop = keyframes`
   0% {
        transform: scale(1,1);
    }
    50% {
        transform: scale(1.2,1.2);
    }
    100% {
        transform: scale(1,1);
    }
`;

export const  StyledButtonBackToTop = styled.a`
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
    font-size: 2rem;
    opacity: 1;
    border: 2px solid white;
    animation: ${moveTop} 1s linear infinite;
    
  

`;
  
