import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mockAppBarLayout: {
    ...theme.mixins.appBar,
  },
  pageHeader: {
    height: 1080,
    width: "100%",
    "@media (max-height:1080px)": {
      height: "100vh",
    },
  },
  pageContainer: {
    position: "relative",
    margin: 0,
    maxHeight: "100vh",
  },
  carouselContainer: {
    position: "absolute",
    width: "100%",
    height: 1080,
    top: 0,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    "@media (max-height:1080px)": {
      height: "100vh",
    },
  },
  carousel: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  carouselSlide: {
    position: "relative",
    height: 1080,
    top: 0,
    "@media (max-height:1080px)": {
      height: "100vh",
    },
  },
  fieldTitle: {
    position: "absolute",
    color: "white",
    textAlign: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
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
}));

export default useStyles;
