import React, { Component } from "react";
import { withStyles, Typography } from "@material-ui/core";
import FundingOption from "./components/FundingOption";
import FundingEnterAmount from "./components/FundingEnterAmount";

const useStyles = (theme) => ({
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
  },
});

class BackProject extends Component {
  state = {
    fundingInputs: [0, 0, 0, 0, 0, 0, 0],
    onClick: (index) => {
      let fundingInputs = [...this.state.fundingInputs];
      let fundingInput = { ...fundingInputs[index] };
      fundingInputs = [0, 0, 0, 0, 0, 0, 0];
      fundingInput = 1;
      fundingInputs[index] = fundingInput;
      this.setState({ fundingInputs });
    },
    createFundingOption: (item, index) => {
      if (item.id === 0) {
        return (
          <FundingOption
            optionNumber={item.optionNumber}
            amount={item.amount}
            title={item.title}
            description={item.description}
            onClick={() => {this.state.onClick(index)}}
          />
        );
      } else {
        return (
          <FundingEnterAmount
            optionNumber={item.optionNumber}
            amount={item.amount}
            title={item.title}
            description={item.description}
          />
        );
      }
    },
  };

  render() {
    const { classes } = this.props;

    const items = [
      {
        optionNumber: 0,
        amount: 5,
        title: "Thank you and scientists' updates",
        description:
          "Receive a thank you from the scientist(s) be kept up to date with the scientist's progress on the research.",
        id: this.state.fundingInputs[0],
      },
      {
        optionNumber: 2,
        amount: 25,
        title: "Explanations of concepts and Q&A",
        description:
          "Access higher level breakdown of scientific concepts and the chance to participate in regular Q&A sessions with the scientist(s).",
        id: this.state.fundingInputs[1],
      },
      {
        optionNumber: 3,
        amount: 50,
        title:
          "In depth details of research with data, lab notes and methods/techniques",
        description:
          "Gain access to an extraordinary educational opportunity: view scientist's walkthroughs of findings, methods on procuring data, details on scientific techniques and more.",
        id: this.state.fundingInputs[2],
      },
      {
        optionNumber: 4,
        amount: 100,
        title: "Acknowledgement in the resulting paper",
        description:
          "Get listed as a backer of the project in the final published paper by the scientist(s).",
        id: this.state.fundingInputs[3],
      },
      {
        optionNumber: 5,
        amount: 250,
        title: "1 on 1 with scientist and personal thank you",
        description:
          "Receive the chance to talk 1 on 1 with the scientist and pick their brains about their research and related science. Discussing science, no matter your level, with the best in the field is an unforgettable experience.",
        id: this.state.fundingInputs[4],
      },
      {
        optionNumber: 6,
        amount: 500,
        title: "SuperNova 'Top Backer' badge",
        description:
          "Become a certified 'Top Backer' on the SuperNova platform: one of our highest accolades to award demonstrations of extreme generosity towards the scientific cause.",
        id: this.state.fundingInputs[5],
      },
      {
        optionNumber: 7,
        amount: 1000,
        title: "SuperNova Hall of Fame and offical signed certificate",
        description:
          "Get inaugurated in the SuperNova Hall of Fame as a serious contributor to scientific research. Receive an official SuperNova certificate signed by *famous science person, SuperNova's founders and the scientist(s).",
        id: this.state.fundingInputs[6],
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
          {this.state.createFundingOption(items[0], 0)}
          {this.state.createFundingOption(items[1], 1)}
          {this.state.createFundingOption(items[2], 2)}
          {this.state.createFundingOption(items[3], 3)}
          {this.state.createFundingOption(items[4], 4)}
          {this.state.createFundingOption(items[5], 5)}
          {this.state.createFundingOption(items[6], 6)}
        </div>
        <Typography className={classes.note}>
          Note: you are free to opt out of any valid rewards later.
        </Typography>
      </div>
    );
  }
}

export default withStyles(useStyles)(BackProject);
