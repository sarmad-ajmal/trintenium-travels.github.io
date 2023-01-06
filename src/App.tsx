import React from 'react';
import Flights from './components/flights';
import { AppBar, Box, Container, Toolbar, Typography, IconButton } from '@mui/material'
import { Flight } from '@mui/icons-material'

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }} marginBottom={6}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <Flight />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Charterpad
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container >
        <Flights />
      </Container>
    </div>
  );
}

export default App;
