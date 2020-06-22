import { createMuiTheme } from "@material-ui/core/styles";

// colors
const redColor = "(255,0,0)"; // red
const blueColor = "(0,6,71)"; // our blue
const whiteColor = "(255,255,255)"; // black
const blackColor = "(0,0,0)"; // white

// fonts

const monteserrat = "font-family: 'Montserrat', sans-serif;";
// Ava Meridian - needs to be added
// Averta Demo - needd to be added

export default createMuiTheme({
  // Customize MU theme properties here;
  // check default theme here https://material-ui.com/customization/default-theme/#default-theme;
  palette: {
    primary: {
      main: blueColor,
    },
    secondary: {
      main: redColor,
    },
    text: {
      primary: blackColor,
      secondary: whiteColor,
    },
  },
  typography: {
    h1: {
      fontFamily: monteserrat,
    },
    h2: {
      fontFamily: monteserrat,
    },
    h3: {
      fontFamily: monteserrat,
    },
    h4: {
      fontFamily: monteserrat,
    },
    h5: {
      fontFamily: monteserrat,
    },
    h6: {
      fontFamily: monteserrat,
    },
  },
});
