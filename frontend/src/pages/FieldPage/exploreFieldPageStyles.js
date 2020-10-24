import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mockAppBarLayout: {
    ...theme.mixins.appBar,
  },
  pageHeader: {
    width: "100%",
    height: "100vh",
    maxHeight: 1080,
  },
  pageContainer: {
    position: "relative",
    margin: 0,
  },
  carouselContainer: {
    position: "absolute",
    width: "100%",
    top: 0,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    maxHeight: 1080,
  },
  carousel: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  carouselSlide: {
    position: "relative",
    top: 0,
    height: "100vh",
    maxHeight: 1080,
  },
  fieldTitle: {
    position: "absolute",
    color: "white",
    textAlign: "center",
    top: "50%",
    fontWeight: "bold",
    fontSize: "1.8rem",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "@media  (max-width: 1200px)": {
      fontSize: "1.5rem",
      width: "80%",
      fontWeight: "bold",
      top: "22%",
    },
    "@media  (max-width: 600px)": {
      fontSize: "1.0rem",
      width: "80%",
      fontWeight: "bold",
      top: "25%",
    },
  },
  displayLink: {
    position: "absolute",
    width: "15%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    top: "15%",
    zIndex: "10",
    left: "0",
    padding: "48px",
  },
  backLink: {
    width: "200px",
    color: "white",
    paddingLeft: "5px",
    flexDirection: "row",
    top: "15%",
    fontWeight: "light",
    fontSize: "0.9rem",
  },
  arrow: {
    width: "30px",
    height: "30px",
    backgroundImage:
      "url(" + require("../../components/HeaderCarousel/arrow.svg") + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
  },
  center: {
    margin: "0 auto",
    maxWidth: 966,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: 92,
    paddingBottom: 92,
  },
  pageTitle: {
    marginTop: 78,
    letterSpacing: "0.09em",
  },
  subheading: {
    margin: "68px 0",
  },
  subheadingParagraph: {
    paddingBottom: 48,
  },

  symbol: {
    position: "absolute",
    width: "250px",
    height: "150px",
    top: "30%",
    margin: "auto",
    left: "0",
    right: "0",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "center",
    backgroundPositionY: "top",
    backgroundSize: "70%",
    "@media  (max-width: 1200px)": {
      top: "20%",
      backgroundSize: "30%",
    },
    "@media  (max-width: 600px)": {
      top: "25%",
      backgroundSize: "50%",
    },
  },
}));

export default useStyles;
