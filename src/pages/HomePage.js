import React, {useContext} from 'react';
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';
import Item from '../components/Item';
import {AppContext} from '../AppContext';
import recipesData from '../recipes';

const ItemListWrapper = styled.div`
  display: grid;
  grid-row-gap: 20px;
`;

export const HomePage = React.memo(() => {
  const {state, setSearchTerm} = useContext(AppContext);
  const {searchTerm} = state;

  const {data} = recipesData;

  let filteredList = data;

  if (searchTerm) {
    filteredList = data.filter(
      (i) =>
        i.title.includes(searchTerm) ||
        i.description.includes(searchTerm) ||
        i.ingredients.toString().includes(searchTerm)
    );
  }

  return (
    <>
      <SearchBar />
      <ItemListWrapper>
        {filteredList.map((i, idx) => (
          <Item
            key={`item-${idx}`}
            title={i.title}
            desc={i.description}
            id={i.id}
          />
        ))}
        {filteredList.length === 0 && <div>No recipes matched! :/ </div>}
      </ItemListWrapper>
    </>
  );
});
