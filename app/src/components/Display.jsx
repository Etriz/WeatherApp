import React from 'react';
import styled from 'styled-components';

const Display = ({ data }) => {
  return (
    <StyledDisplay>
      <div>
        <p>{`${data.location.name}, ${data.location.region}`}</p>
        <p>
          {`${data.current.temperature} °C`}
          <img src={data.current.weather_icons[0]} alt={data.current.weather_descriptions[0]} />
        </p>
      </div>
    </StyledDisplay>
  );
};

export default Display;

const StyledDisplay = styled.div`
  color: #424242;
  margin: 1rem 0;
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
    background: #fafafa;
    border-radius: inherit;
    padding: 0.5rem;
  }
  p > img {
    border-radius: 0.5rem;
  }
`;
