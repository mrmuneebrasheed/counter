import React from "react";
import Button from "./Button";
import "./Counter.css";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = { number: 0 };
  }
  render() {
    const decrement = () => {
      if (this.state.number === 0) return;
      this.setState({ number: this.state.number - 1 });
    };
    const increment = () => {
      if (this.state.number === 100) return;
      this.setState({ number: this.state.number + 1 });
    };
    const reset = () => {
      this.setState({ number: 0 });
    };
    return (
      <div className="counter">
        <Button onClick={decrement}>-</Button>
        {this.state.number}
        <Button onClick={increment}>+</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
    );
  }
}
export default Counter;
