import React, {useContext} from 'react';
import styled from 'styled-components';
import {AppContext} from '../AppContext';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding-bottom: 50px;

  input {
    height: 100px;
    font-size: 50px;
    padding: 20px;
  }
`;

export default function SearchBar() {
  const {state, setSearchTerm} = useContext(AppContext);
  const {isMobile, searchTerm} = state;

  return (
    <Wrapper>
      <input
        type="text"
        placeholder="Type ingredient..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </Wrapper>
  );
}
