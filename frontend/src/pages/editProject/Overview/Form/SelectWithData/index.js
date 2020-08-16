import React, { Component } from "react";
import Select from "./Select";
import axios from "axios";

export class LoadDataAndSelect extends Component {
  state = {
    possibleResults: null,
  };

  fetchResults = async () => {
    const { apiUrl } = this.props;
    const { data } = await axios.get(apiUrl);
    return data;
  };

  setResults = (possibleResults) => this.setState({ possibleResults });

  fetchAndSetResults = async () => {
    const results = await this.fetchResults();
    this.setResults(results);
  };

  componentDidMount() {
    this.fetchAndSetResults();
  }

  render() {
    const { possibleResults } = this.state;
    if (!possibleResults) return null;
    return <Select {...this.props} possibleResults={possibleResults} />;
  }
}

export default LoadDataAndSelect;
