import './App.css';
import Search from './Components/Search';
import CurrentWeather from './Components/CurrentWeather';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import { useState } from 'react';
import Forecast from './Components/Forecast';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null)
  const [currentForecast, setCurrentForecast] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [lat, long ] = searchData.value.split(" ")

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}weather?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=imperial`)
    const forecastFetch = fetch(`${WEATHER_API_URL}forecast?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=imperial`)

    Promise.all([currentWeatherFetch, forecastFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json()
      const forecastResponse = await response[1].json()
      setCurrentWeather({city: searchData.label, ...weatherResponse})
      setCurrentForecast({city: searchData.label, ...forecastResponse})
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      {currentForecast && <Forecast data={currentForecast}/>}
    </div>
  );
}

export default App;
