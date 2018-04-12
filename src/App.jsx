import React from 'react';
import { Provider } from 'react-redux';
import store from 'store/store';
import InstrumentDisplay from 'components/InstrumentDisplay';
import styled from 'styled-components';

const RootDiv = styled.div`
  height: 100%;
  width: 100%;
`;
const App = () => (
  <Provider store={store}>
    <RootDiv className="App">
      <InstrumentDisplay />
      Guitar learn
    </RootDiv>
  </Provider>
);

export default App;
