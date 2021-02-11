import styled from 'styled-components';


export const StyledBoxForSkills = styled.div`
    min-height: 70vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 50px;

`;
export const StyledInfoForSkills = styled.p`
   font-size: ${({ theme }) => theme.fontSize.text};
   width: 100%;
   text-align: center;
   color: ${({ theme }) => theme.mainColorGray};
   

`;
