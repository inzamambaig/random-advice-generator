import React, { Component } from "react";
import axios from "axios";
import "./App.css";

export class App extends Component {
  state = {
    quote: "",
  };

  componentDidMount() {
    this.fetchQuote();
  }

  fetchQuote = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={this.fetchQuote}>
            <span>Random Quote</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
