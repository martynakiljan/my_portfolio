import styled from 'styled-components';


export const AboutMeSection = styled.section`
 margin-bottom: 100px;
 color: black;
 font-size: ${({ theme }) => theme.fontSize.text};
`;

export const Image = styled.img.attrs(props => ({
  src: props.src,
}))`
 display: flex;
 justify-content: center;
 margin-top: 50px;
 width: 270px; 
 max-height: 350px;
 margin: 0 auto;
 background-size: contain;

 @media (min-width: 768px) {
    height: 70%;
 }
  `

export const TextAboutMe = styled.p`
padding: 40px;
text-align: justify;
`;


export const BoxIcon = styled.section`

display:flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
min-height: 50vh;
padding: 60px 0 60px 0;


`;

export const TextIcon = styled.p`

width: 100%;
text-align: center;
margin-top: 60px;
font-size: ${({ theme }) => theme.fontSize.textBig};


`;
export const TextAbourtMeSecondary = styled.p`

text-align: center;
margin: 0 auto;


`;

  
  
