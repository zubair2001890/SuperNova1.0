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
    //
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
    width: "50%",
    bottom: 0,
    left: "50%",
    transform: "translate(-50%, 0%)",
    border: "3px solid green",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  carouselSlide: {
    // position: "relative",
    // height: "100vh",
    // bottom: 0,
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: "#00f",
    color: "#fff",
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
