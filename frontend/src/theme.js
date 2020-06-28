import { createMuiTheme } from "@material-ui/core/styles";

// colors
const appColors = {
  red: "#FF0000",
  blue: "#000647",
  black: "#000",
  white: "#FFF",
};

// fonts
const appFonts = {
  montserrat: "'Montserrat', sans-serif",
  avertaDemo: "'AvertaDemo', sans-serif",
  avaMeridian: "'AvaMeridian', sans-serif",
};

export default createMuiTheme({
  // Customize MU theme properties here;
  // check default theme here https://material-ui.com/customization/default-theme/#default-theme;
  mixins: {
    appBar: {
      height: 140,
      paddingLeft: 48,
      paddingRight: 48,
    },
    navLinkPrimary: {
      fontFamily: appFonts.montserrat,
      fontWeight: "bold",
      fontSize: 20,
      letterSpacing: 1.8,
    },
    navLinkSecondary: {
      fontFamily: appFonts.montserrat,
      fontSize: 18,
      letterSpacing: 1.62,
    },
  },
  palette: {
    common: {
      red: appColors.red,
      blue: appColors.blue,
      black: appColors.black,
      white: appColors.white,
    },
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
      fontFamily: appFonts.montserrat,
      fontWeight: "700",
      fontSize: "51px",
      lineHeight: "60px",
    },
    h2: {
      fontFamily: appFonts.montserrat,
      fontSize: "40px",
      fontWeight: "700",
      lineHeight: "48px",
      letterSpacing: "3.6px",
    },
    h3: {
      fontFamily: appFonts.montserrat,
    },
    h4: {
      fontFamily: appFonts.montserrat,
    },
    h5: {
      fontFamily: appFonts.montserrat,
    },
    h6: {
      fontFamily: appFonts.montserrat,
    },
    subtitle1: {
      fontFamily: appFonts.montserrat,
    },
    subtitle2: {
      fontFamily: appFonts.montserrat,
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
