import styled, {css} from 'styled-components';


export const ProjectsSection = styled.section`

width: 100%;
font-size: 20px;
font-weight:${({ theme }) => theme.light};
color: ${({ theme }) => theme.mainColorGray};
padding: 10px;
margin-top: 10px;
margin-bottom: 100px;

`;





export const DescriptionOfProject = styled.div`
margin-top: 30px;




`;
export const NameOfProject = styled.div`
margin-top: 30px;
font-style: italic;



`;



export const ContainerForProject = styled.div`
width: 100%;
position: relative;
padding-top: 150px;


`;

export const Image = styled.img.attrs(props => ({
  src: props.src,
}))`
  position: absolute;
  width: 100%;
  height: 150px;
  margin-bottom: 70px;
  background-size: cover;
  background-repeat: no-repeat, repeat;
  background-attachment: fixed;
  background-position: center;
  background-blend-mode: overlay;
  overflow: hidden;

  `

export const IdOfProject = styled.p`
position: absolute;
color:white;
font-size: 40px;



`;

export const LinkToProjectOne = styled.a`
position: absolute;
font-size: 30px;
color: white;
display: flex;
left: 0;
justify-content: center;
align-items: center;
width: 50%;
height: 150px;
padding: 50px;
text-decoration: none;

&:hover {
  text-decoration: underline;

}


`;
export const LinkToProjectTwo = styled.a`
position: absolute;
color: white;
display: flex;
right: 0;
font-size: 30px;
justify-content: center;
align-items: center;
width: 50%;
height: 150px;
text-decoration: none;

&:hover {
  text-decoration: underline;

}
`;