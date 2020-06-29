import React, { useEffect } from "react";
import { Typography, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setDarkTheme as setPageDarkTheme } from "../store/slices/page";

const useStyles = makeStyles((theme) => ({
  center: {
    margin: "0 auto",
    maxWidth: 966,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: 92,
    paddingBottom: 92,
  },
  mockAppBarLayout: {
    ...theme.mixins.appBar,
  },
  pageHeader: {
    height: 370,
    backgroundImage: "url(" + require("./assets/faq.png") + ")",
  },
  pageTitle: {
    position: "relative",
    top: 20,
    color: "white",
  },
  subheadingVerticalMargin: {
    margin: "68px 0",
  },
  subheadingTextVerticalMargin: {
    paddingBottom: 48,
  },
}));

function Faq() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageDarkTheme(true));
    return () => {
      dispatch(setPageDarkTheme(false));
    };
  }, [dispatch]);

  return (
    <>
      <div className={classes.pageHeader}>
        <div className={classes.mockAppBarLayout} />
        <Typography variant="h1" align="center" className={classes.pageTitle}>
          FREQUENTLY ASKED QUESTIONS
        </Typography>
      </div>
      <div className={classes.center}>
        <Typography variant="h2" className={classes.subheadingVerticalMargin}>
          Who is SuperNova for?
        </Typography>
        <Typography
          variant="body1"
          className={classes.subheadingTextVerticalMargin}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          sagittis lectus ac aliquet egestas. Aenean turpis risus, aliquet a
          ligula ut, euismod convallis sem. Mauris fermentum felis in nibh
          egestas pretium. Integer hendrerit urna mi, ut facilisis magna
          placerat et. Aenean sit amet ipsum vitae velit volutpat dapibus.
          Pellentesque sed neque et ipsum tincidunt volutpat id sit amet erat.
          Nullam eu accumsan justo.
        </Typography>
        <Typography variant="h2" className={classes.subheadingVerticalMargin}>
          Can I refund my donation?
        </Typography>
        <Typography
          variant="body1"
          className={classes.subheadingTextVerticalMargin}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          sagittis lectus ac aliquet egestas. Aenean turpis risus, aliquet a
          ligula ut, euismod convallis sem. Mauris fermentum felis in nibh
          egestas pretium. Integer hendrerit urna mi, ut facilisis magna
          placerat et. Aenean sit amet ipsum vitae velit volutpat dapibus.
          Pellentesque sed neque et ipsum tincidunt volutpat id sit amet erat.
          Nullam eu accumsan justo.
        </Typography>
        <Typography variant="h2" className={classes.subheadingVerticalMargin}>
          Can I create more than one project at once?
        </Typography>
        <Typography
          variant="body1"
          className={classes.subheadingTextVerticalMargin}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          sagittis lectus ac aliquet egestas. Aenean turpis risus, aliquet a
          ligula ut, euismod convallis sem. Mauris fermentum felis in nibh
          egestas pretium. Integer hendrerit urna mi, ut facilisis magna
          placerat et. Aenean sit amet ipsum vitae velit volutpat dapibus.
          Pellentesque sed neque et ipsum tincidunt volutpat id sit amet erat.
          Nullam eu accumsan justo.
        </Typography>
        <Typography variant="h2" className={classes.subheadingVerticalMargin}>
          Question question question?
        </Typography>
        <Typography
          variant="body1"
          className={classes.subheadingTextVerticalMargin}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          sagittis lectus ac aliquet egestas. Aenean turpis risus, aliquet a
          ligula ut, euismod convallis sem. Mauris fermentum felis in nibh
          egestas pretium. Integer hendrerit urna mi, ut facilisis magna
          placerat et. Aenean sit amet ipsum vitae velit volutpat dapibus.
          Pellentesque sed neque et ipsum tincidunt volutpat id sit amet erat.
          Nullam eu accumsan justo.
        </Typography>
        <Typography variant="h2" className={classes.subheadingVerticalMargin}>
          Question question question?
        </Typography>
        <Typography
          variant="body1"
          className={classes.subheadingTextVerticalMargin}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          sagittis lectus ac aliquet egestas. Aenean turpis risus, aliquet a
          ligula ut, euismod convallis sem. Mauris fermentum felis in nibh
          egestas pretium. Integer hendrerit urna mi, ut facilisis magna
          placerat et. Aenean sit amet ipsum vitae velit volutpat dapibus.
          Pellentesque sed neque et ipsum tincidunt volutpat id sit amet erat.
          Nullam eu accumsan justo.
        </Typography>
      </div>
    </>
  );
}

export default Faq;
