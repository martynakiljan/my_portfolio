import styled from 'styled-components';


export const StyledContainerAboutMe = styled.section`
 margin-top: 200px;
 margin-bottom: 100px;
 color: ${({ theme }) => theme.mainColorGray};
 font-size: ${({ theme }) => theme.fontSize.text};
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
 background-size: cover;

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
margin-top: 60px;
font-size: ${({ theme }) => theme.fontSize.text};


`;


  
  
