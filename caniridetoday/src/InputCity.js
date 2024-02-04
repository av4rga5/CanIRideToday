// InputBoxExample.js

import React from 'react';

const InputBoxExample = ({ value, onChange, logUserInput }) => {
  return (
    <div>
      <label>
        Enter something:
        <input type="text" value={value} onChange={onChange} />
      </label>
      <button onClick={logUserInput}>Log Input</button>
    </div>
  );
};

export default InputBoxExample;