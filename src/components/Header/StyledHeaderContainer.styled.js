
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



  ${({ secondary }) =>
    secondary &&
    css`

     font-size: ${({ theme }) => theme.xxl};
     text-transform: uppercase;
     margin-top: 0px;
  
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
margin-top: 78px;

`;
export const DecorativeLine = styled.div`
width: 80%;
height: 2px;
margin:  0 auto;
background-color: ${({ theme }) => theme.mainColorGray};
margin-top: 100px;

`;


  