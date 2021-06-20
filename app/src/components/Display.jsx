import React from 'react';
import styled from 'styled-components';

const Display = ({ data }) => {
  const time = new Date(data.dt * 1000).toLocaleTimeString([], {
    timeStyle: 'short',
  });

  return (
    <StyledDisplay>
      <div>
        <h4>{`${data.name}`}</h4>
        <span>{time}</span>
        <p>{`${data.main.temp.toFixed()}° F`}</p>
        {/* <img src={icon} alt={data.current.weather_descriptions[0]} /> */}
        <span>{`${data.weather[0].description}`}</span>
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
