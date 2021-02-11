import styled from 'styled-components';


export const StyledContainerProjects = styled.section`

width: 100%;
font-size: 20px;
font-weight:${({ theme }) => theme.light};
color: ${({ theme }) => theme.mainColorGray};
padding: 10px;
margin-top: 10px;
margin-bottom: 100px;

`;
export const StyledNumberOfProject = styled.h4`

font-size: ${({ theme }) => theme.fontSize.number};
opacity: 0.5;
font-weight: bold;

`;


export const StyledBoxForProject = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: lightblue;
width: 100%;
height: 150px;

`;
export const StyledTextUnderProjects = styled.div`
margin-top: 50px;
text-align: center;
width: 100%;
font-size: ${({ theme }) => theme.fontSize.text};


`;
