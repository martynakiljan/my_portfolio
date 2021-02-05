import styled, {css} from 'styled-components';

export const StyledMainTitle = styled.h1`

  color: ${({ theme }) => theme.mainColorPastel};
  position: relative;
  top: 200px;
  font-size: 100px;
  font-family: 'Rubik Mono One', sans-serif;
  text-transform: uppercase;
  font-weight:bold;
  margin: 0;
  padding: 0;

  



  ${({ secondary }) =>
    secondary &&
    css`
     display: flex;
     font-size: ${({ theme }) => theme.xxl};
     text-transform: uppercase;
     width: 100%;
     
    `}

`;

export const StyledBoxDot = styled.div`
position: relative;
height: 100px;
width: 100%;


`;
  

export const StyledDot = styled.div`
  position: absolute;
  bottom: 0;
  margin-left: 10px;
  background-color: ${({ theme }) => theme.mainColorGray};
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
  
  

  