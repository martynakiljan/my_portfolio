/** @format */

import React, { useState, useEffect } from "react";
import Portfolio from "./components/Portfolio/Portfolio";
import { css } from "@emotion/core";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/mainTheme";
import GlobalStyle from "../src/theme/GlobalStyle";
import BeatLoader from "react-spinners/BeatLoader";
import "./style/App.css";
import AnimatedCursor from "react-animated-cursor";

const override = css`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <BeatLoader
          color={"#FF9292"}
          loading={loading}
          size={10}
          css={override}
        />
      ) : (
        <>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <AnimatedCursor
              innerSize={8}
              outerSize={8}
              color="193, 11, 111"
              outerAlpha={0.2}
              innerScale={0.7}
              outerScale={5}
            />
            <Portfolio />
          </ThemeProvider>
        </>
      )}
    </>
  );
}

export default App;
