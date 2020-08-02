import React from "react";
import forms from "../../../constants/forms";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  total: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 600,
    fontSize: "1.25rem",
  },
});

function Total({ total }) {
  const classes = useStyles();
  return <span className={classes.total}>Total Funding Goal = ${total}</span>;
}

const addTotal = (total, { target = 0 }) => total + parseInt(target);

const getTotal = (stages) => stages.reduce(addTotal, 0);

const mapStateToProps = ({ form }) => {
  const { [forms.editProject]: editProjectForm } = form;
  const { stages } = editProjectForm.values;
  const total = getTotal(stages);
  return { total };
};

export default connect(mapStateToProps)(Total);
