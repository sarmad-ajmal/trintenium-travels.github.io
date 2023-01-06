import React from 'react';
import Flights from './components/flights';
import { Container } from '@mui/material'
function App() {
  return (
    <div className="App">
      <Container >
        <Flights />
      </Container>
    </div>
  );
}

export default App;
