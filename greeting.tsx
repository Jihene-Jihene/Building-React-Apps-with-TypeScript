/**
 * code 1:
 * 
 * import React from 'react'; 
const Greeting = ({ name }) => { 
  return <div>Hello, {name}!</div>;
};
export default Greeting;

 */

import React, { FC } from "react";

// Define the props type for the Greeting component
interface GreetingProps {
  name: string; // 'name' should be a string
}

// Use FC type for the functional component
const Greeting: FC<GreetingProps> = ({ name }) => {
  return <div> Hello, {name}! </div>;
};

export default Greeting;
