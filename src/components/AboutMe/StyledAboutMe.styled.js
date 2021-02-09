import styled from 'styled-components';

export const StyledAboutMeTitle = styled.h4` 
  color: ${({ theme }) => theme.mainColorPastel};
  margin-bottom: 50px;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.title};
     

`


export const StyledContainerAboutMe = styled.section`
 margin-top: 200px;


`;

export const StyledImage = styled.img.attrs(props => ({
  src: props.src,
}))`
 display: flex;
 justify-content: center;
 margin-top: 50px;
 width: 200px;
 height: 200px;
 margin: 0 auto;
 border-radius: 50%;

  `

export const StyledTextAboutMe = styled.p`
padding: 40px;
text-align: justify;
`;


export const StyledBoxIcon = styled.section`

display:flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
min-height: 50vh;


`;

export const StyledTextIcon = styled.p`

width: 100%;
text-align: center;


`;


  
  
