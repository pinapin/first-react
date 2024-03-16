import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="flex items-center">
        <button
          onClick={() => this.setState({ count: this.state.count - 1 })}
          className="bg-blue-500 text-white p-3 rounded-md"
        >
          -
        </button>
        <h1 className="mx-3">{this.state.count}</h1>
        <button
          onClick={() => this.setState({ count: this.state.count + 1 })}
          className="bg-blue-500 text-white p-3 rounded-md"
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
