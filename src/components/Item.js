import React, {useContext, useEffect} from 'react';
import styled from 'styled-components';
import {AppContext} from '../AppContext';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;

  a {
    text-decoration: underline;
    color: black;
    font-weight: bolder;
  }
`;

export default function Item(props) {
  const {title, desc, id} = props;
  const {state, setSearchTerm} = useContext(AppContext);
  const {isMobile, searchTerm} = state;

  return (
    <Wrapper>
      <a href={`/details/${id}`}>{title}</a>
      <div>{desc}</div>
    </Wrapper>
  );
}
