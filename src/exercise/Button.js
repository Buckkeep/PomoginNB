import React, { useState } from 'react';

const Button = (props) => {
  // Create a state Hook here
  const [count, setCount] = useState(0);

  return (
    <div>
      <h4>Counter: {count}</h4>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

export default Button;
