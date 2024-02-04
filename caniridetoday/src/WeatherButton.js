import React, { useState } from 'react';
import axios from 'axios';
import InputTemplate from './InputTemplate';

const WeatherButton = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [userInput, setUserInput] = useState('');

  const getWeather = async () => {
    handleUserInput();
    try {
      const apiKey = '24b026cc46e6afd58f453b31ce824a05';
      const city = userInput;
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  const handleUserInput = (input) => {
    setUserInput(input);
  };

  return (
    <div>
    <InputTemplate onInputSubmit={handleUserInput}/>
      <button onClick={getWeather}>Get Tomorrow's Weather</button>
      {weatherData && (
        <div>
          <h2>Weather for {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp - 273} °C</p>
          <p>Wind: {weatherData.wind.speed} m/s</p>
          <p>Cloudy: {weatherData.clouds.all} clouds</p>
          <p>Sky status: {weatherData.weather[0].description} </p>
          {/* Add more weather information as needed */}
        </div>
      )}
    </div>
  );
};

export default WeatherButton;