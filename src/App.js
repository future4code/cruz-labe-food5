import React from 'react';
import Router from './routes/Router'
import GlobalState from './global/GlobalState'
import { ThemeProvider } from "@material-ui/styles";
import theme from "./constants/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
    <GlobalState >
      <Router/>
    </GlobalState>
    </ThemeProvider>
  );
}

export default App;
