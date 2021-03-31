import React from 'react';
import styled from 'styled-components';

const Display = ({ data }) => {
  return (
    <StyledDisplay>
      <div>
        <h5>{`${data.location.name}`}</h5>
        <span>{`${data.current.temperature.toString()} °F`}</span>
        <img src={data.current.weather_icons[0]} alt={data.current.weather_descriptions[0]} />
        <span>{`${data.current.weather_descriptions}`}</span>
      </div>
    </StyledDisplay>
  );
};

export default Display;

const StyledDisplay = styled.div`
  width: 75%;
  max-width: 16rem;
  color: #424242;
  margin: 1rem auto;
  padding: 0.25rem;
  border-radius: 0.5rem;
  background: linear-gradient(
    135deg,
    rgba(17, 153, 142, 1) 0%,
    rgba(0, 0, 0, 0) 25%,
    rgba(0, 0, 0, 0) 75%,
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
  img {
    border-radius: 0.5rem;
  }
`;
