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
    padding: 0;
    /* min-height: 700vh; */
    margin: 0;
    font-size: 1.6rem;
    font-family: 'Rubik Mono One',sans-serif;
    background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgNDAsNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgxMzUpICI+PHJlY3QgaWQ9InBhdHRlcm4tYmFja2dyb3VuZCIgd2lkdGg9IjQwMCUiIGhlaWdodD0iNDAwJSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LDEpIj48L3JlY3Q+IDxjaXJjbGUgZmlsbD0icmdiYSgyNDUsIDEwMSwgMTAxLDEpIiBjeD0iMjAiIGN5PSIyMCIgcj0iMiI+PC9jaXJjbGU+PGNpcmNsZSBmaWxsPSJyZ2JhKDEwMiwgMTI2LCAyMzQsMSkiIGN4PSIwIiBjeT0iNDAiIHI9IjEiPjwvY2lyY2xlPjxjaXJjbGUgZmlsbD0icmdiYSgxMDIsIDEyNiwgMjM0LDEpIiBjeD0iNDAiIGN5PSIwIiByPSIxIj48L2NpcmNsZT48Y2lyY2xlIGZpbGw9InJnYmEoMTAyLCAxMjYsIDIzNCwxKSIgY3g9IjAiIGN5PSIwIiByPSIxIj48L2NpcmNsZT48Y2lyY2xlIGZpbGw9InJnYmEoMTAyLCAxMjYsIDIzNCwxKSIgY3g9IjQwIiBjeT0iNDAiIHI9IjEiPjwvY2lyY2xlPjwvcGF0dGVybj4gIDwvZGVmcz4gPHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSI+PC9yZWN0Pjwvc3ZnPg==")

    /* https://doodad.dev/pattern-generator */
  }
`;

export default GlobalStyle;
