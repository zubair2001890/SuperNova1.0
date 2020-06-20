import React from "react";
import { Typography, Box } from "@material-ui/core";

function Title() {
  return (
    <>
      <Box my={10}>
        <Typography variant="h4" align="center">
          FREQUENTLY ASKED QUESTIONS
        </Typography>
      </Box>
    </>
  );
}

function Main() {
  return (
    <>
      <main>
        <Box my={5} mx="auto" width="50%">
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
        </Box>
        <Box my={5} mx="auto" width="50%">
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
        </Box>
        <Box my={5} mx="auto" width="50%">
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
        </Box>
        <Box my={5} mx="auto" width="50%">
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
        </Box>
        <Box my={5} mx="auto" width="50%">
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
        </Box>
      </main>
    </>
  );
}

function Faq() {
  return (
    <>
      <Title />
      <Main />
    </>
  );
}

export default Faq;
