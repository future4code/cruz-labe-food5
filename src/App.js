import React from "react";
import Router from "./routes/Router";
import GlobalState from "./global/GlobalState";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./constants/theme";
import Header from "./components/Header/Header";
import FooterNav from "./components/NavigationBar/FooterNav";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <BrowserRouter>
          <Route
            exact
            path={["/signup", "/edit-address", "/home", "/cart", "/profile"]}
          >
            <Header />
          </Route>
          <Router />
          <FooterNav />
        </BrowserRouter>
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
