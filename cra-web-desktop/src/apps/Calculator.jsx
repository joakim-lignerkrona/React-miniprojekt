import React, { Component } from "react";
import Window from "../window/Window";
import ResultComponent from "./components calc/ResultComponent";
import KeyPadComponent from "./components calc/KeyPadComponent";

export default class Calculator extends Component {
  constructor() {
    super();
    
    this.state = {
      result: "",
    };
  }
  
  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };
  
  calculate = () => {
    var checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }
    
    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(checkResult) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };
  
  reset = () => {
    this.setState({
      result: "",
    });
  };
  
  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };
  
  render() {
    return (
      <Window windowTitle={"Calculator.exe"}>
        <div className="calculator-body">
          <h1>Simple Calculator</h1>
          <ResultComponent result={this.state.result} />
          <KeyPadComponent onClick={this.onClick} />
        </div>
      </Window>
    );
  }
}

function Calculator1() {
return (
  <Window windowTitle={"Calculator.exe"}>
      <h1>Calculator</h1>
    </Window>
  );
}

