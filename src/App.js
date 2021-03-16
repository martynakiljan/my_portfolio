import React, {useState, useEffect} from 'react'
import Portfolio from './components/Portfolio/Portfolio'
import { css } from "@emotion/core";
import { ThemeProvider } from 'styled-components';
import {theme} from './theme/mainTheme'
import GlobalStyle from '../src/theme/GlobalStyle'
import BeatLoader from "react-spinners/BeatLoader";
import './style/App.css'

const override = css`
 display: flex;
 width: 100%;
 height: 100vh;
 justify-content:center;
 align-items: center;
`;


function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
    }, 4000)
  }, [])


  return (
   <>
    {
      loading ? 
      <BeatLoader color={'#FF9292'} loading={loading} size={10} css={override}/>

      :
      <>
      <GlobalStyle/>
       <ThemeProvider theme={theme}>
         <Portfolio/>
       </ThemeProvider>
       </>
    }
  </>

     
  )
}

export default App;
