import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import ImgMediaCard from "./Card/Card";
import { getDetails } from "./cardDetails";
import Navbar from "./Navbar";
import "./cards.css";

export default class Cards extends Component {
  state = {
    cards: [],
    filter: "",
  };

  componentDidMount() {
    this.setState({ cards: getDetails() });
  }

  getData = (e) => {
    console.log(e.target.value);
    this.setState({ filter: e.target.value });
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="cards-container">
          <div style={{ paddingTop: 50 }}>
            <TextField
              id="standard-basic"
              label="Search"
              color="primary"
              onChange={this.getData}
            />
          </div>
          <div className="d-flex flex-wrap justify-content-center p-lg-5">
            {this.state.cards
              .filter((card) =>
                card.title
                  .toLowerCase()
                  .includes(this.state.filter.toLowerCase())
              )
              .map((card) => (
                <div key={card.id}>
                  <ImgMediaCard className="d-flex flex-wrap" card={card} />
                </div>
              ))}
          </div>
        </div>
      </>
    );
  }
}
