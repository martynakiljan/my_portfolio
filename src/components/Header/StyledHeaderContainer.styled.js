
import styled, {css} from 'styled-components';


export const HeaderSection = styled.header`
 padding: 10px;
`;


export const MainTitle = styled.h1`

  color: ${({ theme }) => theme.mainColorPastel};
  font-size: 120px;
  text-transform: uppercase;
  font-weight:bold;
  margin: 0;
  padding: 0;
  margin-top: 110px;
  

 @media (min-width: 760px) {
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
width: 25px;
height: 25px;
border-radius: 50%;
background-color: ${({ theme }) => theme.mainColorGray};
position: absolute; 
right: -40px;
bottom: 0.25em;
/* top: calc(100% - 65px); */


`;



export const DecorativeLine = styled.div`
width: 80%;
height: 2px;
margin:  0 auto;
background-color: ${({ theme }) => theme.mainColorGray};
margin-top: 100px;

`;

export const ParentForTypewriter = styled.p`
font-size: 12px;
@media (min-width: 760px) {
  font-size: 17px;
  }

`;


  