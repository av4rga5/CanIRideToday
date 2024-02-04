import React, { useState } from 'react';
import InputBoxExample from './InputCity';

const InputTemplate = ({ onInputSubmit }) => {
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
    logUserInput();
  };

  const logUserInput = () => {
    console.log('User input:', userInput);
    // Pass userInput to the parent component (WeatherApp)
    onInputSubmit(userInput);
  };
  return (
    <div>
      <h1>Parent Component</h1>
      <InputBoxExample value={userInput} onChange={handleInputChange} logUserInput={logUserInput} />
    </div>
  );
};

export default InputTemplate;