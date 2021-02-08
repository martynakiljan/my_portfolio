import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  @import url(href="https://fonts.googleapis.com/css2?family=Bowlby+One+SC&display=swap");
  
  /* *, *::before, *::after {
    box-sizing: border-box;
     -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
     
     
  } */
  
  html {
    font-size: 62.5%; 
  }
  
  body {
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    font-family: 'Rubik MonoOne';
    background: white;
   
  }
`;

export default GlobalStyle;
