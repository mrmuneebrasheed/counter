import React from "react";
import { ThemeConsumer } from "styled-components";
import Button from "./Button";
import "./Counter.css";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = { number1: 0, number2: 0 };
  }
  render() {
    const decrement1 = () => {
      if (this.state.number1 === 0) return;
      this.setState({ number1: this.state.number1 - 1 });
    };
    const decrement2 = () => {
      if (this.state.number2 === 0) return;
      if (this.state.number2 === this.state.number1) {
        this.setState({ number2: this.state.number2 - 1 });
        this.setState({ number1: this.state.number1 - 1 });
      }
      this.setState({ number2: this.state.number2 - 1 });
    };
    const increment1 = () => {
      if (this.state.number1 === 100) return;
      if (this.state.number1 === this.state.number2) {
        this.setState({ number1: this.state.number1 + 1 });
        this.setState({ number2: this.state.number2 + 1 });
      }
      this.setState({ number1: this.state.number1 + 1 });
    };
    const increment2 = () => {
      if (this.state.number2 === 100) return;
      this.setState({ number2: this.state.number2 + 1 });
    };
    const reset1 = () => {
      this.setState({ number1: 0 });
    };
    const reset2 = () => {
      this.setState({ number2: 0 });
    };
    return (
      <div>
        <div className="counter">
          <Button onClick={decrement1}>-</Button>
          {this.state.number1}
          <Button onClick={increment1}>+</Button>
          <Button onClick={reset1}>Reset</Button>
        </div>
        <div className="counter">
          <Button onClick={decrement2}>-</Button>
          {this.state.number2}
          <Button onClick={increment2}>+</Button>
          <Button onClick={reset2}>Reset</Button>
        </div>
      </div>
    );
  }
}
export default Counter;
