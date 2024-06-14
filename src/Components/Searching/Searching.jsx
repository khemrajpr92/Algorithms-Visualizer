import React, { Component } from "react";

import Number from "./Number";
import Navbar from "./Navbar/Navbar";
import TextField from "@material-ui/core/TextField";
import Slider from "./ControlPannel/Slider";
// import { notification } from "antd";
import swal from "sweetalert2";
import { Input } from "antd";
// Algorithms
import linearSearch from "./algorithms/linearSearch";
import binarySearch from "./algorithms/binarySearch";

import "./Searching.css";
import { isInteger } from "lodash";

// const swal = new SweetAlert2();
class Searching extends Component {
  state = {
    array: [],
    steps: [],
    color: [],
    colorSteps: [],
    delay: 500,
    count: 10,
    currentStep: 0,
    found: false,
    idx: [],
    key: 0,
    range: [0, 100],
    algorithm: 0,
    isVisualizing: false,
  };

  ALGORITHMS = [linearSearch, binarySearch];

  componentDidMount() {
    debugger;
    this.generateArray();
  }

  generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  clearColorKey = () => {
    let blankKey = new Array(this.state.count).fill(0);
    this.setState({ color: blankKey, colorSteps: [blankKey] });
  };

  changeAlgorithm = async (e) => {
    await this.setState({
      algorithm: parseInt(e.target.value),
      array: this.state.array,
      steps: [this.state.array],
    });

    this.generateSteps();
  };

  generateArray = (array, userInput) => {
    debugger;
    let arr = [];
    if (userInput == true) {
      for (let i = 0; i < this.state.count; i++) {
        var userElement = parseInt(array[i]);
        arr.push(userElement);
      }
    } else {
      for (let i = 0; i < this.state.count; i++) {
        arr.push(
          this.generateRandomNumber(this.state.range[0], this.state.range[1])
        );
      }
    }
    if (this.ALGORITHMS[this.state.algorithm].name === "binarySearch") {
      arr.sort((a, b) => a - b);
    }
    this.setState(
      {
        array: arr,
        steps: [arr],
        count: this.state.count,
        currentStep: 0,
      },
      () => {
        this.generateSteps();
      }
    );
  };

  generateSteps = async () => {
    debugger;
    await this.clearColorKey();
    let k = this.state.key;
    let array = this.state.array.slice();
    let steps = this.state.steps.slice();
    let colorSteps = this.state.colorSteps.slice();
    let idx = this.state.idx.slice();

    if (isInteger(k)) {
      this.ALGORITHMS[this.state.algorithm](array, steps, k, colorSteps, idx);
      // debugger;
    }

    this.setState({
      steps: steps,
      colorSteps: colorSteps,
      idx: idx,
    });

    console.log(steps, colorSteps, k);
  };
  setArray = (val, index) => {
    let arr = this.state.array;
    arr[index] = val;
    arr.sort((a, b) => a - b);
    console.log(index);
    this.setState({
      array: arr,
      steps: [arr],
      count: this.state.count,
      currentStep: 0,
    });
  };

  startSearch = async () => {
    let steps = this.state.steps.slice();
    let color = this.state.colorSteps.slice();
    let index = this.state.idx.slice();

    for (let i = 0; i < steps.length; i++) {
      let currentStep = this.state.currentStep;
      this.setState({
        array: steps[i],
        color: color[i],
        idx: index,
        currentStep: currentStep + 1,
      });
      debugger;
      console.log(this.state.array, this.state.color, this.state.color[i]);
      if (this.ALGORITHMS[this.state.algorithm].name === "binarySearch") {
        if (this.state.color[index[index.length - 1]] == "2") {
          new swal(
            "Great!",
            `Your Key is Found at Index: ${index[index.length - 1]}`,
            "success"
          );
        }
      }
      if (this.ALGORITHMS[this.state.algorithm].name === "linearSearch") {
        if (this.state.color[index[index.length - 1]] == "2") {
          new swal(
            "Great!",
            `Your Key is Found at Index: ${index[index.length - 1]}`,
            "success"
          );
        }
      }
      if (this.state.color[i - 2] == "3") {
        new swal("Ooops!", "Your Key is Not Present in Array", "error");
      }
      await sleep(this.state.delay);
    }
  };

  reset = async () => {
    this.clearColorKey();
    let arr = this.state.array;
    await this.setState(
      {
        array: arr,
        steps: [arr],
      },
      () => this.generateSteps()
    );
  };

  setCount = async (count) => {
    await this.setState({ count }, () => this.generateArray());
  };

  setSpeed = async (speed) => {
    await this.setState({ delay: speed }, () => this.generateArray());
  };

  setKey = async (e) => {
    this.clearColorKey();
    let key = e.target.value;
    let arr = this.state.array;
    if (isInteger(parseInt(key))) {
      key = parseInt(key);
    } else {
      key = null;
    }
    await this.setState({ key, array: arr, steps: [arr] }, () => {
      this.generateSteps();
    });
  };

  setFound = () => {
    this.setState({ found: true });
    console.log("hello");
  };

  DoSomething = () => {
    // alert("Hii");
    // here we are taking the input from the User Input component
    var element = document.getElementById("userInput");
    var ele = element.value;
    const array = ele.split(",");
    const userInput = true;
    this.setState({ count: array.length }, () => {
      this.generateArray(array, userInput);
    });
  };
  render() {
    return (
      <div className="searching">
        <Navbar
          startSearch={this.startSearch}
          reset={this.reset}
          randomize={this.generateArray}
          changeAlgorithm={this.changeAlgorithm}
        />
        {/* making container for the user input  */}
        <div className="userData-container">
          {" "}
          <span class="span-text">
            Enter Your Own Elements With Comma Seperated (a,b,c,d)<br></br>
          </span>
          {/* input component taken from antd library  */}
          <Input
            id="userInput"
            placeholder="Enter Your Own Data"
            allowClear
            rows={20}
            cols={20}
          />
          <button class="btn btn-info btn-user" onClick={this.DoSomething}>
            Submit
          </button>
        </div>
        <div className="frame">
          <TextField
            id="standard-basic"
            className="my-5"
            label="Enter Key to Search"
            onChange={this.setKey}
            color="secondary"
            InputLabelProps={{ shrink: true }}
          />
          <div className="numbers-container">
            {this.state.array.map((value, index) => (
              <Number
                value={value}
                index={index}
                setArray={this.setArray}
                color={this.state.color[index]}
                key={index}
              />
            ))}
          </div>
          <div className="control-pannel mt-5">
            <Slider type="Count" handleChange={this.setCount} />
            <Slider type="Speed" handleChange={this.setSpeed} />
          </div>
        </div>
      </div>
    );
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default Searching;
