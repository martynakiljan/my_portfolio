import React from 'react';
import Nav from '../Nav/Nav'
import Header from '../Header/Header.js'
import AboutMe from '../AboutMe/AboutMe'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import {MainPortfolio} from './MainPortfolio.styled'
import content from '../Projects/Content.json'



class Portfolio extends React.Component {




render() {


    return (
        <MainPortfolio>
             <Nav />
             <Header/>
             <AboutMe/>
             <Projects content={content}/>
             <Skills/>
             <Contact/>
             <Footer/>
        </MainPortfolio>
    )
}

}

export default Portfolio;