/* eslint-disable no-unused-vars */
import React from "react";
import BottomNavigation from "../../components/NavigationBar/BottomNavigation";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
// import SearchIcon from '@material-ui/icons/Search';
import Link from "@material-ui/core/Link";
import { ContainerHome } from "./styled";
import TextField from "@material-ui/core/TextField";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useHistory } from "react-router";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";

const HomePage = () => {
  useProtectedPage();
  const history = useHistory();
  const restaurants = useRequestData([], `${BASE_URL}restaurants`);
  console.log(restaurants);

  const handleClick = (event) => {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  };
  return (
    <ContainerHome>
      {/* <SearchIcon /> */}
      <TextField
        // {...params}
        label="Search "
        margin="normal"
        variant="outlined"
        //     InputProps={{ ...params.InputProps, type: 'search' }}
      />
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
          Material-UI
        </Link>
        <Link
          color="inherit"
          href="/getting-started/installation/"
          onClick={handleClick}
        >
          Core
        </Link>
        <Link
          color="inherit"
          href="/getting-started/installation/"
          onClick={handleClick}
        >
          Core
        </Link>
      </Breadcrumbs>
      <h1>HomePage</h1>
      <BottomNavigation />
    </ContainerHome>
  );
};

export default HomePage;
