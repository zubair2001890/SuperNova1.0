import React from "react";
import Particles from "react-particles-js";
import {
  particlesDarkThemeConfig,
  particlesLightThemeConfig,
} from "./particlesConfig";

export default ({ className, darkTheme = true }) => (
  <Particles
    params={darkTheme ? particlesDarkThemeConfig : particlesLightThemeConfig}
    className={className}
  />
);
