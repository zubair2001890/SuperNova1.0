import { createMuiTheme } from "@material-ui/core/styles";

// colors
const appColors = {
  red: "#FF0000",
  blue: "#000647",
  black: "#FFFFFF",
  white: "#000000",
};

// fonts
const appFonts = {
  monteserrat: "font-family: 'Montserrat', sans-serif;",
  avertaDemo: "font-family: 'AvertaDemo', sans-serif;",
};

export default createMuiTheme({
  // Customize MU theme properties here;
  // check default theme here https://material-ui.com/customization/default-theme/#default-theme;
  palette: {
    primary: {
      main: appColors.blue,
    },
    secondary: {
      main: appColors.red,
    },
    text: {
      primary: appColors.black,
      secondary: appColors.white,
    },
  },
  typography: {
    fontFamily: appFonts.avertaDemo,
    h1: {
      fontFamily: appFonts.monteserrat,
    },
    h2: {
      fontFamily: appFonts.monteserrat,
    },
    h3: {
      fontFamily: appFonts.monteserrat,
    },
    h4: {
      fontFamily: appFonts.monteserrat,
    },
    h5: {
      fontFamily: appFonts.monteserrat,
    },
    h6: {
      fontFamily: appFonts.monteserrat,
    },
    subtitle1: {
      fontFamily: appFonts.monteserrat,
    },
    subtitle2: {
      fontFamily: appFonts.monteserrat,
    },
    body1: {
      fontFamily: appFonts.avertaDemo,
    },
    body2: {
      fontFamily: appFonts.avertaDemo,
    },
    button: {
      fontFamily: appFonts.avertaDemo,
    },
    caption: {
      fontFamily: appFonts.avertaDemo,
    },
    overline: {
      fontFamily: appFonts.avertaDemo,
    },
  },
});
