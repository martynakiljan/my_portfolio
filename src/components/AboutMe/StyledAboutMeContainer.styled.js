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
padding: 30px;
text-align: justify;


@media (min-width: 900px) {
      padding: 50px;
      font-size: 17px;
     }
`;


export const BoxIcon = styled.section`
display:flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
min-height: 50vh;
padding: 40px 10px 60px 10px;

`;

export const TextIcon = styled.p`

width: 100%;
text-align: center;
margin-top: 60px;
color: ${({ theme }) => theme.mainColorGray};
font-size: ${({ theme }) => theme.fontSize.textBig};
@media (min-width: 900px) {
  font-size: 1.8rem;
 }

`;

export const TextAbourtMeSecondary = styled.p`
text-align: center;
margin: 0 auto;
margin-top:20px;

@media (min-width: 900px) {
  font-size: 17px;
}

`;

  
  
