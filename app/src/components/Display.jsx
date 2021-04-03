import React from 'react';
import styled from 'styled-components';

const Display = ({ data }) => {
  const time = new Date(data.location.localtime).toLocaleTimeString([], { timeStyle: 'short' });

  const code = data.current.weather_code;
  let icon = '';

  switch (code) {
    case 113:
      if (data.current.is_day === 'yes') {
        icon = './icons/sun.svg';
      } else icon = './icons/moon.svg';
      break;
    case 116:
      if (data.current.is_day === 'yes') {
        icon = './icons/cloud-sun.svg';
      } else icon = './icons/cloud-moon.svg';
      break;
    case 119 || 122:
      icon = './icons/cloud.svg';
      break;
    case 179 || 227 || 230 || 329 || 332 || 335 || 338 || 371:
      icon = './icons/snow-alt.svg';
      break;
    case 143 || 248 || 260:
      icon = './icons/fog.svg';
      break;
    case 176 ||
      182 ||
      185 ||
      263 ||
      266 ||
      281 ||
      284 ||
      293 ||
      296 ||
      299 ||
      302 ||
      305 ||
      308 ||
      353 ||
      356 ||
      359:
      icon = './icons/rain.svg';
      break;
    case 311 || 314 || 317 || 320 || 323 || 326 || 362 || 365 || 368:
      icon = './icons/snow.svg';
      break;
    case 350 || 374 || 377:
      icon = './icons/hail.svg';
      break;
    case 386 || 389 || 392 || 395:
      icon = './icons/lightning.svg';
      break;
    default:
      icon = data.current.weather_icons;
      break;
  }

  return (
    <StyledDisplay>
      <div>
        <h4>{`${data.test || data.location.name}`}</h4>
        <span>{time}</span>
        <p>{`${data.current.temperature}° F`}</p>
        <img src={icon} alt={data.current.weather_descriptions[0]} />
        <span>{`${data.current.weather_descriptions}`}</span>
      </div>
    </StyledDisplay>
  );
};

export default Display;

const StyledDisplay = styled.div`
  max-width: 16rem;
  color: #424242;
  margin: 1rem auto;
  padding: 3px;
  border-radius: 0.5rem;
  background: linear-gradient(
    135deg,
    rgba(17, 153, 142, 1) 0%,
    rgba(0, 0, 0, 0) 15%,
    rgba(0, 0, 0, 0) 85%,
    rgba(56, 239, 117, 1) 100%
  );

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fafafa;
    border-radius: inherit;
    padding: 0.5rem;
  }
  p,
  span {
    font-size: 1.25rem;
  }
  img {
    border-radius: 0.5rem;
    margin: 0 0 1rem;
  }
`;
