import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  @import url('href="https://fonts.googleapis.com/css2?family=Rubik+Mono+One&family=Rubik:ital,wght@0,300;0,400;0,500;1,300&display=swap');
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    
  }
  
  html {
    font-size: 62.5%; 
  }
  
  body {
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    font-family: 'Rubik', sans-serif;
    background: white;
   
  }
`;

export default GlobalStyle;
