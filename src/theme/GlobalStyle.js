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
  *{
    padding: 0;
    margin: 0;
  }
  
  body {
    padding: 0;
    min-height: 400vh;
    margin: 0;
    font-size: 1.6rem;
    font-family: 'Rubik Mono One',sans-serif;
    background: white;
   
  }
`;

export default GlobalStyle;
