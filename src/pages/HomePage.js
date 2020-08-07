import React, {useContext} from 'react';
import SearchBar from '../components/SearchBar';
import Item from '../components/Item';
import {AppContext} from '../AppContext';

const items = [
  {title: 'auto1', desc: 'auto', id: '1'},
  {title: 'auto2', desc: 'auto', id: '2'},
  {title: 'moto1', desc: 'moto', id: '3'},
  {title: 'moto2', desc: 'moto', id: '4'},
  {title: 'moto3', desc: 'moto', id: '5'},
  {title: 'moto4', desc: 'moto', id: '6'},
  {title: 'auto3', desc: 'auto', id: '7'},
  {title: 'auto4', desc: 'auto', id: '8'},
  {title: 'ski1', desc: 'ski', id: '9'},
  {title: 'ski2', desc: 'ski', id: '10'},
  {title: 'ski3', desc: 'ski', id: '11'},
];

export const HomePage = React.memo(() => {
  const {state, setSearchTerm} = useContext(AppContext);
  const {searchTerm} = state;

  let filteredList = items;

  if (searchTerm) {
    filteredList = items.filter(
      (i) => i.title.includes(searchTerm) || i.desc.includes(searchTerm)
    );
  }

  return (
    <>
      <SearchBar />
      {filteredList.map((i, idx) => (
        <Item key={`item-${idx}`} title={i.title} desc={i.desc} id={i.id} />
      ))}
    </>
  );
});
