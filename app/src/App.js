import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import dotenv from 'dotenv';

import Search from './components/Search';
import Display from './components/Display';

dotenv.config();

function App() {
  const TEST_DATA = {
    coord: {
      lon: -122.0838,
      lat: 37.3861,
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d',
      },
    ],
    base: 'stations',
    main: {
      temp: 84.88,
      feels_like: 84.02,
      temp_min: 58.66,
      temp_max: 101.21,
      pressure: 1006,
      humidity: 39,
    },
    visibility: 10000,
    wind: {
      speed: 1.99,
      deg: 51,
      gust: 8.99,
    },
    clouds: {
      all: 1,
    },
    dt: 1624134007,
    sys: {
      type: 2,
      id: 2017352,
      country: 'US',
      sunrise: 1624106854,
      sunset: 1624159919,
    },
    timezone: -25200,
    id: 5375480,
    name: 'Mountain View',
    cod: 200,
  };

  const [weatherData, setWeatherData] = useState(TEST_DATA);

  const asyncGet = async (city) => {
    const apiResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`
    );
    // console.log(apiResponse);
    apiResponse.status !== 200 ? setWeatherData(TEST_DATA) : setWeatherData(apiResponse.data);
  };

  useEffect(
    () => {
      asyncGet('Chicago');
    },
    // eslint-disable-next-line
    []
  );

  return (
    <StyledApp>
      <Search asyncGet={asyncGet} />
      <Display data={weatherData} />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  width: 80%;
  max-width: 750px;
  margin: 0 auto;
  padding: 2rem;
`;
