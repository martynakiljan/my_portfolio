
import styled, {css} from 'styled-components';


export const HeaderSection = styled.header`
 padding: 20px;
`;


export const MainTitle = styled.h1`

  color: ${({ theme }) => theme.mainColorPastel};
  font-size: 120px;
  text-transform: uppercase;
  font-weight:bold;
  margin-top: 110px;

 @media (min-width: 768px) {
    font-size: 170px;
 }


  ${({ secondary }) =>
    secondary &&
    css`

     font-size: ${({ theme }) => theme.xxl};
     text-transform: uppercase;
     margin-top: 0px;
     position: relative;
  
    `}

`;


export const Div = styled.div`
  display: flex;
  width: 100%;

`;


export const Dot = styled.div`
width: 35px;
height: 35px;
border-radius: 50%;
background-color: ${({ theme }) => theme.mainColorGray};
position: absolute; 
right: -40px;
top: 75px;

`;



export const DecorativeLine = styled.div`
width: 80%;
height: 2px;
margin:  0 auto;
background-color: ${({ theme }) => theme.mainColorGray};
margin-top: 100px;

`;

export const ParentForTypewriter = styled.p`
font-size: 20px;

`;


  