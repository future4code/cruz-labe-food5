import React from "react";
import { BottomNav } from "./styledBottomNav";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { Route, useHistory } from "react-router-dom";
import {
  goToCartPage,
  goToHomePage,
  goToProfilePage,
} from "../../routes/coordinator";

const useStyles = makeStyles({
  root: {
    width: 400,
  },
});

const FooterNav = () => {
  const history = useHistory();

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Route exact path={["/home", "/cart", "/profile", "/restaurant/:id"]}>
      <BottomNav>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <Route exact path={["/home"]}>
            <BottomNavigationAction
              onClick={() => goToHomePage(history)}
              icon={
                <HomeOutlinedIcon color="primary" style={{ fontSize: 40 }} />
              }
            />
          </Route>
          <Route exact path={["/cart", "/profile", "/restaurant/:id"]}>
            <BottomNavigationAction
              onClick={() => goToHomePage(history)}
              icon={
                <HomeOutlinedIcon color="action" style={{ fontSize: 40 }} />
              }
            />
          </Route>
          <Route exact path={["/cart"]}>
            <BottomNavigationAction
              onClick={() => goToCartPage(history)}
              icon={
                <ShoppingCartOutlinedIcon
                  color="primary"
                  style={{ fontSize: 40 }}
                />
              }
            />
          </Route>
          <Route exact path={["/home", "/profile", "/restaurante:id"]}>
            <BottomNavigationAction
              onClick={() => goToCartPage(history)}
              icon={
                <ShoppingCartOutlinedIcon
                  color="action"
                  style={{ fontSize: 40 }}
                />
              }
            />
          </Route>
          <Route exact path={["/profile"]}>
            <BottomNavigationAction
              onClick={() => goToProfilePage(history)}
              icon={
                <PersonOutlineIcon color="primary" style={{ fontSize: 40 }} />
              }
            />
          </Route>
          <Route exact path={["/home", "/carrinho", "/restaurant/:id"]}>
            <BottomNavigationAction
              onClick={() => goToProfilePage(history)}
              icon={
                <PersonOutlineIcon color="action" style={{ fontSize: 40 }} />
              }
            />
          </Route>
        </BottomNavigation>
      </BottomNav>
    </Route>
  );
};

export default FooterNav;
