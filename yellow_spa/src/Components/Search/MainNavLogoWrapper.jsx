import React from "react";
import { MainNavLogo } from "./searchStyled";

export function MainNavLogoWrapper({ jumpToHome }) {
  return (
    <MainNavLogo onClick={jumpToHome}>
      Search<span>4</span>Games
    </MainNavLogo>
  );
}
