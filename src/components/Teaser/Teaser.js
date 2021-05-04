import React from "react";
import { useHistory } from "react-router-dom";
import LogoFood from "../../assets/logo-future-eats.png";
import { TeaserContainer, FoodLogo } from "./styledTeaser";

function Teaser() {
  const history = useHistory();

  setTimeout(() => {
    history.push("/login");
  }, 5000);

  return (
    <TeaserContainer>
      <FoodLogo src={LogoFood} />
    </TeaserContainer>
  );
}

export default Teaser;
