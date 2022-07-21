import { GlobalStyle } from "./styles/global";
import { RoutesApp } from "./routes";

import { Header } from "./components/Header";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/themes";
import { useState } from "react";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <Header setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
        <RoutesApp />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
