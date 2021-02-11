import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  @import url(href="https://fonts.googleapis.com/css2?family=Bowlby+One+SC&display=swap");
  
  *, *::before, *::after {
    box-sizing: border-box;
     -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
     
     
  }
  
  html {
    font-size: 62.5%; 
  }

  * {
    padding: 0;
    margin: 0;
  }
  
  body {
    padding:0;
    margin: 0;
    font-size: 1.6rem;
    font-family: monospace;
    background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9IjYxIiBoZWlnaHQ9IjYxIiB2aWV3Qm94PSIwIDAgNDAsNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgwKSAiPjxyZWN0IGlkPSJwYXR0ZXJuLWJhY2tncm91bmQiIHdpZHRoPSI0MDAlIiBoZWlnaHQ9IjQwMCUiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwxKSI+PC9yZWN0PiA8Y2lyY2xlIGZpbGw9InJnYmEoMjU0LCAyMTUsIDIxNSwxKSIgY3g9IjIwIiBjeT0iMjAiIHI9IjEiPjwvY2lyY2xlPjxjaXJjbGUgZmlsbD0icmdiYSgyNTIsIDEyOSwgMTI5LDEpIiBjeD0iMCIgY3k9IjQwIiByPSIwIj48L2NpcmNsZT48Y2lyY2xlIGZpbGw9InJnYmEoMjUyLCAxMjksIDEyOSwxKSIgY3g9IjQwIiBjeT0iMCIgcj0iMCI+PC9jaXJjbGU+PGNpcmNsZSBmaWxsPSJyZ2JhKDI1MiwgMTI5LCAxMjksMSkiIGN4PSIwIiBjeT0iMCIgcj0iMCI+PC9jaXJjbGU+PGNpcmNsZSBmaWxsPSJyZ2JhKDI1MiwgMTI5LCAxMjksMSkiIGN4PSI0MCIgY3k9IjQwIiByPSIwIj48L2NpcmNsZT48L3BhdHRlcm4+ICA8L2RlZnM+IDxyZWN0IGZpbGw9InVybCgjcGF0dGVybikiIGhlaWdodD0iMTAwJSIgd2lkdGg9IjEwMCUiPjwvcmVjdD48L3N2Zz4=")

    /* https://doodad.dev/pattern-generator */
  }
`;

export default GlobalStyle;
