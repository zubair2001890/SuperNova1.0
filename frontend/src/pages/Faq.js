import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paragraphText: {
    margin: "auto",
    width: "50%",
  },
}));

function Faq() {
  const classes = useStyles();
  return (
    <>
      <div>
        <Typography variant="h4" align="center">
          FREQUENTLY ASKED QUESTIONS
        </Typography>
      </div>
      <div className={classes.paragraphText}>
        <Typography variant="h5">Who is SuperNova for?</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          sagittis lectus ac aliquet egestas. Aenean turpis risus, aliquet a
          ligula ut, euismod convallis sem. Mauris fermentum felis in nibh
          egestas pretium. Integer hendrerit urna mi, ut facilisis magna
          placerat et. Aenean sit amet ipsum vitae velit volutpat dapibus.
          Pellentesque sed neque et ipsum tincidunt volutpat id sit amet erat.
          Nullam eu accumsan justo.
        </Typography>
      </div>
      <div className={classes.paragraphText}>
        <Typography variant="h5">Can I refund my donation?</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          sagittis lectus ac aliquet egestas. Aenean turpis risus, aliquet a
          ligula ut, euismod convallis sem. Mauris fermentum felis in nibh
          egestas pretium. Integer hendrerit urna mi, ut facilisis magna
          placerat et. Aenean sit amet ipsum vitae velit volutpat dapibus.
          Pellentesque sed neque et ipsum tincidunt volutpat id sit amet erat.
          Nullam eu accumsan justo.
        </Typography>
      </div>
      <div className={classes.paragraphText}>
        <Typography variant="h5">
          Can I create more than one project at once?
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          sagittis lectus ac aliquet egestas. Aenean turpis risus, aliquet a
          ligula ut, euismod convallis sem. Mauris fermentum felis in nibh
          egestas pretium. Integer hendrerit urna mi, ut facilisis magna
          placerat et. Aenean sit amet ipsum vitae velit volutpat dapibus.
          Pellentesque sed neque et ipsum tincidunt volutpat id sit amet erat.
          Nullam eu accumsan justo.
        </Typography>
      </div>
      <div className={classes.paragraphText}>
        <Typography variant="h5">Question question question?</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          sagittis lectus ac aliquet egestas. Aenean turpis risus, aliquet a
          ligula ut, euismod convallis sem. Mauris fermentum felis in nibh
          egestas pretium. Integer hendrerit urna mi, ut facilisis magna
          placerat et. Aenean sit amet ipsum vitae velit volutpat dapibus.
          Pellentesque sed neque et ipsum tincidunt volutpat id sit amet erat.
          Nullam eu accumsan justo.
        </Typography>
      </div>
      <div className={classes.paragraphText}>
        <Typography variant="h5">Question question question?</Typography>
        <Typography variant="body1">
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
