import styled from 'styled-components';


export const ProjectsSection = styled.section`

width: 100%;
font-size: 20px;
font-weight:${({ theme }) => theme.light};
color: ${({ theme }) => theme.mainColorGray};
padding: 10px;
margin-top: 10px;

`;


export const DescriptionOfProject = styled.div`
margin-top: 20px;
margin-bottom: 10px;
font-weight:lighter;
font-size: 17px;
@media (max-width: 350px) {
  font-size: 12px;
 }
`;

export const NameOfProject = styled.div`
margin-left: 36px;
font-weight: lighter;
color: #FF9292;
font-size: 25px;
display: flex;
justify-content: center;
align-items: center;

`;
export const  ContainerForUrl = styled.div`
display: flex;
justify-content: center;
align-items:center;

`;


export const ContainerForProject = styled.div`
margin-top: 100px;
width: 100%;

`;

export const Image = styled.img.attrs(props => ({
  src: props.src,
}))`
  display: flex;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 70px;
  background-size: cover;
  background-repeat: no-repeat, repeat;
  background-attachment: fixed;
  background-position: center;
  background-blend-mode: overlay;
  overflow: hidden;
  height: 400px;


 @media (max-width: 350px) {
  width: 100%;
  height: 100%;
  object-fit:cover;
  object-position:50% 50%;
 }
 @media (min-width: 350px) {
  width: 100%;
  height: 100%;
  object-fit:cover;
  object-position:50% 50%;
 }
 @media (min-width: 380px) {
  width: 70%;
  height: 100%;
  object-fit:cover;
  object-position:50% 50%;
 }
 @media (min-width: 520px) {
  width: 70%;
  height: 100%;
  object-fit:cover;
  object-position:50% 50%;
 }
 @media (min-width: 820px) {
  width: 50%;
  height: 100%;
  object-fit:cover;
  object-position:50% 50%;
 }

  `

export const IdOfProject = styled.p`
position: absolute;
background-color:#505050;
width: 30px;
text-align: center;
color:white;
font-size: 40px;
line-height: 60px;




`;
export const MainContainerTitleProject = styled.div`
display: flex;
height: 60px;




`;

export const TechnologiesInfo = styled.p`
color: black;
margin-bottom:50px;
font-size: 12px;
color: #A9A9A9;

`;

export const LinkToProjectOne = styled.a`

font-size: 20px;
color: #A9A9A9;
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
color: #A9A9A9;
display: flex;
left: 0;
justify-content: center;
align-items: center;
width: 20%;
text-decoration: none;



&:hover {
  text-decoration: underline;

}
`;