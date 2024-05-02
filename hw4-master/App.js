// App.js

import React, { useEffect, useState } from 'react';

function App() {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat={LAT}&lon={LON}&appid={API_KEY}&units=metric');
        const data = await response.json();
        setTemperature(data.main.temp);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="App">
      <h1>Current Temperature:</h1>
      <p>{temperature !== null ? `${temperature}°C` : 'Loading...'}</p>
    </div>
  );
}

export default App;
