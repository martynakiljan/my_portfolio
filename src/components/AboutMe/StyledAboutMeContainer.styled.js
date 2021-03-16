import styled from 'styled-components';

export const AboutMeSection = styled.section`
 margin-bottom: 100px;
 margin-top: 120px;
 color: black;
 font-size: ${({ theme }) => theme.fontSize.text};
`;


export const Box = styled.div`
width: 33,33333%;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;


export const TextAboutMeBottom = styled.p`
margin: 15px 0 15px 0;
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
    justify-content: center;
    align-items: center;
    min-height: 50vh;


@media (min-width: 900px) {
    flex-direction: row;
    text-align: center;
    justify-content: center;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas:
      ". . .";
 }

`;

export const TextIcon = styled.p`

width: 100%;
text-align: center;
padding: 10px;
margin-top: 80px;
max-width: 33,33%;
color: ${({ theme }) => theme.mainColorGray};
font-size: ${({ theme }) => theme.fontSize.textBig};


@media (min-width: 900px) {
  font-size: 1.8rem;
  padding: 20px;
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

  
  
