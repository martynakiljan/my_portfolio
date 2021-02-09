import Portfolio from './components/Portfolio/Portfolio'
import { ThemeProvider } from 'styled-components';
import {theme} from './theme/mainTheme'
import GlobalStyle from '../src/theme/GlobalStyle'


function App() {
  return (
    <>
    <GlobalStyle/>
       <ThemeProvider theme={theme}>
         <Portfolio/>
       </ThemeProvider>

    </>   
  )
}

export default App;
