import React, {useContext} from 'react';
import styled from 'styled-components';
import {AppContext} from '../AppContext';

const Wrapper = styled.div`
  display: grid;

  input {
    height: 100px;
    font-size: 60px;
    padding: 10px;
  }
`;

export default function SearchBar() {
  const {state, setSearchTerm} = useContext(AppContext);
  const {isMobile, searchTerm} = state;

  console.log('searchTerm => ', searchTerm);
  return (
    <Wrapper>
      <input
        type="text"
        placeholder="Ingresar Ingrediente..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </Wrapper>
  );
}
