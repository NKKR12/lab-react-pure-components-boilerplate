import React, { Component } from "react";

class SimpleCounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isIncrementAllowed: true, // Initially, the increment is allowed
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  toggleIncrement = () => {
    this.setState((prevState) => ({
      isIncrementAllowed: !prevState.isIncrementAllowed,
    }));
  };

  render() {
    console.log("This is Simple Component");
    const { count, isIncrementAllowed } = this.state;

    return (
      <div>
        <h2>Simple Counter</h2>
        <p>Count: {count}</p>
        <button onClick={this.toggleIncrement}>
          {isIncrementAllowed ? "Set toggle" : "set toggle"}
        </button>
        <button onClick={this.increment} disabled={!isIncrementAllowed}>
          Increment
        </button>
      </div>
    );
  }
}

export default SimpleCounterComponent;