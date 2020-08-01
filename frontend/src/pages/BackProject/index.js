import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import FundingOption from "./components/FundingOption";
import FundingEnterAmount from "./components/FundingEnterAmount";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    marginTop: 150,
    width: 960,
    margin: "auto",
  },
  projectTitle: {
    textAlign: "left",
    marginBottom: theme.spacing(1),
  },
  projectScientist: {
    textAlign: "right",
    marginTop: theme.spacing(1),
  },
  subtitle: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
  fundingOptions: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
  note: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(10),
    fontWeight: "bold",
  }
}));

function createFundingOption(item) {
  return (
    <FundingEnterAmount
      optionNumber={item.optionNumber}
      amount={item.amount}
      title={item.title}
      description={item.description}
    />
  );
}

export default () => {
  const classes = useStyles();

  const items = [
    {
      optionNumber: 1,
      amount: 5,
      title: "Thank you and scientists' updates",
      description:
        "Receive a thank you from the scientist(s) be kept up to date with the scientist's progress on the research.",
    },
    {
      optionNumber: 2,
      amount: 25,
      title: "Explanations of concepts and Q&A",
      description:
        "Access higher level breakdown of scientific concepts and the chance to participate in regular Q&A sessions with the scientist(s).",
    },
    {
      optionNumber: 3,
      amount: 50,
      title:
        "In depth details of research with data, lab notes and methods/techniques",
      description:
        "Gain access to an extraordinary educational opportunity: view scientist's walkthroughs of findings, methods on procuring data, details on scientific techniques and more.",
    },
    {
      optionNumber: 4,
      amount: 100,
      title: "Acknowledgement in the resulting paper",
      description:
        "Get listed as a backer of the project in the final published paper by the scientist(s).",
    },
    {
      optionNumber: 5,
      amount: 250,
      title: "1 on 1 with scientist and personal thank you",
      description:
        "Receive the chance to talk 1 on 1 with the scientist and pick their brains about their research and related science. Discussing science, no matter your level, with the best in the field is an unforgettable experience.",
    },
    {
      optionNumber: 6,
      amount: 500,
      title: "SuperNova 'Top Backer' badge",
      description:
        "Become a certified 'Top Backer' on the SuperNova platform: one of our highest accolades to award demonstrations of extreme generosity towards the scientific cause.",
    },
    {
      optionNumber: 7,
      amount: 100,
      title: "SuperNova Hall of Fame and offical signed certificate",
      description:
        "Get inaugurated in the SuperNova Hall of Fame as a serious contributor to scientific research. Receive an official SuperNova certificate signed by *famous science person, SuperNova's founders and the scientist(s).",
    },
  ];

  return (
    <div className={classes.pageContainer}>
      <Typography variant="h1" className={classes.projectTitle}>
        Investigation into cellular automata
      </Typography>
      <Typography variant="body1" className={classes.projectScientist}>
        by Bernard Huang
      </Typography>
      <Typography variant="h3" className={classes.subtitle}>
        Back this project
      </Typography>
      <div className={classes.fundingOptions}>
        {items.map((item) => createFundingOption(item))}
      </div>
      <Typography className={classes.note}>Note: you are free to opt out of any valid rewards later.</Typography>
    </div>
  );
};
