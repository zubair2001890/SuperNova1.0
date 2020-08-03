import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mockAppBarLayout: {
    ...theme.mixins.appBar,
  },
  pageHeader: {
    height: "100vh",
    width: "100%",
    backgroundImage:
      "url(" +
      require("../../components/Constellation/assets/background/background.png") +
      ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  pageContainer: {
    position: "relative",
    margin: 0,
  },
  constellationContainer: {
    position: "absolute",
    maxWidth: "25%",
    minWidth: "250px",
    maxHeight: 195,
    top: "220px",
    left: "50%",
    transform: "translate(-50%, 0%)",
    zIndex: 10,
  },
  carouselContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
  },
  carousel: {
    position: "absolute",
    height: "50%",
    width: "100%",
    bottom: 0,
    left: "50%",
    transform: "translate(-50%, 0%)",
    display: "flex",
    justifyContent: "center",
  },
  carouselSlide: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
  subFieldTitle: {
    position: "absolute",
    color: "white",
    textAlign: "center",
    top: "160px",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

export default useStyles;
