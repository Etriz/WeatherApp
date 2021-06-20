import React, { useState } from 'react';
import styled from 'styled-components';

const Search = ({ asyncGet }) => {
  const [inputText, setInputText] = useState('');

  // const axiosParams = {
  //   query: inputText,
  // };

  const search = () => {
    asyncGet(inputText);
    setInputText('');
  };

  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={inputText}
        placeholder="Search for a city"
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={() => search()}>Search</button>
    </StyledForm>
  );
};

export default Search;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;

  input {
    background: none;
    outline: none;
    border: none;
    border-bottom: 2px solid gray;
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
    border: 1px solid #424242;
    margin: 0 0 0 1rem;
    border-radius: 0.25rem;
    background: #fafafa;
  }
  button:hover {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0);
    background: linear-gradient(90deg, rgba(17, 153, 142, 1) 0%, rgba(56, 239, 117, 1) 100%);
    color: #f1f1f1;
  }
`;
