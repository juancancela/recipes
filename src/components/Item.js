import React, {useContext} from 'react';
import styled from 'styled-components';
import {AppContext} from '../AppContext';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 100px;
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
