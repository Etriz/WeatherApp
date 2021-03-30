import React, { useState } from 'react';
import styled from 'styled-components';

const Search = ({ asyncGet }) => {
  const [inputText, setInputText] = useState('');

  const axiosParams = {
    access_key: process.env.REACT_APP_API_KEY,
    query: inputText,
    units: 'f',
  };

  return (
    <StyledForm onSubmit={() => asyncGet(axiosParams)}>
      <input
        type="text"
        value={inputText}
        placeholder="Search for a city"
        onChange={(e) => setInputText(e.value)}
      />
      <button>Search</button>
    </StyledForm>
  );
};

export default Search;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;

  input {
    color: #f1f1f1;
    background: none;
    outline: none;
    border: none;
    border-bottom: 2px solid #f1f1f1;
  }
  input:focus {
    box-shadow: 0;
    outline: none;
    border-image: linear-gradient(90deg, rgba(17, 153, 142, 1) 0%, rgba(56, 239, 117, 1) 100%);
    border-image-slice: 1;
  }
  input::placeholder {
    color: gray;
  }

  button {
    outline: none;
    border: none;
    margin: 0 0 0 1rem;
    border-radius: 0.25rem;
  }
  button:hover {
    background: linear-gradient(90deg, rgba(17, 153, 142, 1) 0%, rgba(56, 239, 117, 1) 100%);
    color: #f1f1f1;
  }
`;
