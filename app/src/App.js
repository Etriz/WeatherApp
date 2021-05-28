import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Search from './components/Search';
import Display from './components/Display';

function App() {
  const TEST_DATA = {
    test: 'Sample City',
    request: {
      type: 'City',
      query: 'New York, United States of America',
      language: 'en',
      unit: 'm',
    },
    location: {
      name: 'New York',
      country: 'United States of America',
      region: 'New York',
      lat: '40.714',
      lon: '-74.006',
      timezone_id: 'America/New_York',
      localtime: '2021-03-30 00:11',
      localtime_epoch: 1617063060,
      utc_offset: '-4.0',
    },
    current: {
      observation_time: '04:11 AM',
      temperature: 9,
      weather_code: 113,
      weather_icons: [
        'https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png',
      ],
      weather_descriptions: ['Clear'],
      wind_speed: 0,
      wind_degree: 0,
      wind_dir: 'N',
      pressure: 1026,
      precip: 0,
      humidity: 31,
      cloudcover: 0,
      feelslike: 8,
      uv_index: 1,
      visibility: 16,
      is_day: 'no',
    },
  };

  const [weatherData, setWeatherData] = useState(TEST_DATA);

  const asyncGet = async (params) => {
    const apiResponse = await axios.get('http://api.weatherstack.com/current', { params });
    apiResponse.data.error ? setWeatherData(TEST_DATA) : setWeatherData(apiResponse.data);
  };

  useEffect(
    () => {
      asyncGet({
        access_key: process.env.REACT_APP_API_KEY,
        query: 'Sioux Falls',
        units: 'f',
      });
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
