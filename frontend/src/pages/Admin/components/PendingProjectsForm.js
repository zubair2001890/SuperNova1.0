import React, {Component} from "react";
import {getResponseFromProjectDeletion} from "../../../helpers/apiHelpers"
import {getResponseFromProjectApproval} from "../../../helpers/apiHelpers"

export class PendingProjectsForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      let projectID = this.state.value;
      let response = null;
      if (this.props.approveOrDelete === "Approve"){
        response = getResponseFromProjectApproval(projectID);
      }
      else {
        response = getResponseFromProjectDeletion(projectID);
      }
      if (response.status !== 200)
      {
        console.log(response);
      }
      else
      {
        window.location.reload();
      }
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
        {this.props.approveOrDelete + ":"}
        <br></br>
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Project ID"/>
          </label>
          <br></br>
          <input type="submit" className={this.props.classes.button} value="Submit" />
        </form>
      );
    }
  }