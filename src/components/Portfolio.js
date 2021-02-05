import GlobalStyle from '../theme/GlobalStyle'
import Nav from './Nav/Nav'
import { ThemeProvider } from 'styled-components';
import {theme} from '../theme/mainTheme'
import Header from './Header/Header.js'

const Portfolio = () => {

    return (
        <>
           <ThemeProvider theme={theme}>
           <GlobalStyle/>
             <Nav/>
             <Header/>
           </ThemeProvider>
        </>
    )

}

export default Portfolio;