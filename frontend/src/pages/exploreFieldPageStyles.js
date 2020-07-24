import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mockAppBarLayout: {
    ...theme.mixins.appBar,
  },
  pageHeader: {
    height: "100vh",
    width: "100%",
  },
  pageContainer: {
    position: "relative",
    margin: 0,
  },
  carouselContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    backgroundImage:
      "url(" +
      require("../components/Constellation/assets/background/background.png") +
      ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  carousel: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  carouselSlide: {
    position: "relative",
    height: "100vh",
    top: 0,
  },
  fieldTitle: {
    position: "absolute",
    color: "white",
    textAlign: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

export default useStyles;
