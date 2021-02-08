import styled, {css} from 'styled-components';

export const StyledMainTitle = styled.h1`

  color: ${({ theme }) => theme.mainColorPastel};
  font-size: 100px;
  font-family: 'Rubik Mono One', sans-serif;
  text-transform: uppercase;
  font-weight:bold;
  margin: 0;
  padding: 0;
  height: 100%;
  margin-top: 100px;


  ${({ secondary }) =>
    secondary &&
    css`

     font-size: ${({ theme }) => theme.xxl};
     text-transform: uppercase;
     width: 45%;
     height: 100%;
     margin-top: 0px;
  
    
     
    `}

`;



export const StyledSecondaryTitle = styled.h3`

  width: 80%;
  font-size: 20px;
  font-weight:${({ theme }) => theme.light};
  color: ${({ theme }) => theme.mainColorGray};
  margin-top: -5px;
  
`;
  

export const StyledBoxForSecondaryTitle = styled.div`

  width: 100%;
  display: flex;
`;
  

export const StyledDiv = styled.div`
  display: flex;
  align-items: flex-end;
  width: 20%;
  height: 100px;
`;
export const StyledHeader = styled.section`
  padding: 10px;
`;
  
  

  