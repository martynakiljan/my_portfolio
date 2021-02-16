import styled from 'styled-components';


export const ProjectsSection = styled.section`

width: 100%;
font-size: 20px;
font-weight:${({ theme }) => theme.light};
color: ${({ theme }) => theme.mainColorGray};
padding: 10px;
margin-top: 10px;
margin-bottom: 100px;

`;
export const ProjectAction = styled.div`
  background-color: lightgray;
  display: flex;
  margin-bottom: 70px;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 260px;

`;


export const LinkToProject = styled.a`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 150px;
color: black;
text-decoration: none;


`;
export const DescriptionOfProject = styled.div`
margin-top: 30px;
margin-bottom: 30px;



`;
export const NameOfProject = styled.div`
margin-top: 30px;
font-style: italic;



`;


export const IdOfProject = styled.p`
font-size: 60px;
opacity: 0.8;



`;
