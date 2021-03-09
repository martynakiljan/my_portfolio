import styled, {css} from 'styled-components';


export const ProjectsSection = styled.section`

width: 100%;
font-size: 20px;
font-weight:${({ theme }) => theme.light};
color: ${({ theme }) => theme.mainColorGray};
padding: 10px;
margin-top: 10px;

`;


export const DescriptionOfProject = styled.div`
margin-top: 30px;




`;
export const NameOfProject = styled.div`
margin-top: 70px;
font-weight: lighter;
color: #FF9292;

`;
export const  ContainerForUrl = styled.div`
display: flex;
justify-content: center;
align-items:center;

`;


export const ContainerForProject = styled.div`
width: 100%;

`;

export const Image = styled.img.attrs(props => ({
  src: props.src,
}))`

  width: 100%;
  margin-bottom: 70px;
  background-size: cover;
  background-repeat: no-repeat, repeat;
  background-attachment: fixed;
  background-position: center;
  background-blend-mode: overlay;
  overflow: hidden;

  `

export const IdOfProject = styled.p`

color:white;
font-size: 40px;



`;

export const LinkToProjectOne = styled.a`

font-size: 20px;
color: black;
display: flex;
left: 0;
justify-content: center;
align-items: center;
width: 20%;
height: 150px;
padding: 50px;
text-decoration: none;

&:hover {
  text-decoration: underline;

}


`;
export const LinkToProjectTwo = styled.a`
font-size: 20px;
color: black;
display: flex;
left: 0;
justify-content: center;
align-items: center;
width: 20%;
height: 150px;
padding: 50px;
text-decoration: none;

&:hover {
  text-decoration: underline;

}
`;