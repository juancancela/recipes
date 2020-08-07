import React from 'react';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: grid;
`;

function App(props) {
  const {children} = props;
  return <AppWrapper>{children}</AppWrapper>;
}

export default App;
