/**
 * code2:
 * import React, { Component } from 'react'; 
class Counter extends Component { 
  state = {
    count: 0
  }; 
  increment = () => {
    this.setState({ count: this.state.count + 1 }); 
  }; 
  render() { 
    return (
      <div> 
        <p>Count: {this.state.count}</p> 
        <button onClick={this.increment}>Increment</button> 
      </div>
    );
  }
} 
export default Counter;

 */

import React, { Component } from "react";

// Define the state type for the Counter component
interface CounterState {
  count: number; // 'count' should be a number
}

class Counter extends Component<{}, CounterState> {
  // Initialize state with type
  state: CounterState = {
    count: 0,
  };

  // Method to increment the count
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Render method
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
