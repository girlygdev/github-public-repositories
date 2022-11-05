import React, { useState } from "react";

import Container from "@mui/material/Container";
import { ThemeProvider} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import MuiTheme from "./theme/MuiTheme";
import Header from "./components/Header";
import Main from "./components/Main";
import Copyright from "./components/Copyright";

const App = () => {
  const [theme, setTheme] = useState("light")
  const pageTheme = MuiTheme({ mode: theme })

  return (
    <>
      <ThemeProvider theme={pageTheme}>
        <CssBaseline />

        <Container maxWidth="md">
          <Header theme={theme} setTheme={setTheme} />
          <Main />
          <Copyright />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
