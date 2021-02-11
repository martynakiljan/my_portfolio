import styled, {css} from 'styled-components';


export const StyledHeader = styled.header`

 padding: 20px;
  
  
`;





export const StyledMainTitle = styled.h1`

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



export const StyledSecondaryTitle = styled.h3`

  width: 80%;
  font-size: 20px;
  font-weight:${({ theme }) => theme.light};
  color: ${({ theme }) => theme.mainColorGray};
  padding: 10px;
  margin-top: 10px;
  
  
`;


  

  

export const StyledDiv = styled.div`
  display: flex;
  width: 100%;

`;




export const StyledDot = styled.div`
width: 35px;
height: 35px;
border-radius: 50%;
background-color: ${({ theme }) => theme.mainColorGray};
margin-top: 78px;

`;
export const StyledLine = styled.div`
width: 80%;
height: 2px;
margin:  0 auto;
background-color: ${({ theme }) => theme.mainColorGray};
margin-top: 100px;

`;


  