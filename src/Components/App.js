// import '././App.css';
import React from 'react';
import { Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Routing from './Routing';
import 'typeface-indie-flower';

export default function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Indie Flower',
        'cursive',
      ].join(','),
    },
  });

  return (
    <Container maxWidth="auto" sx={{ height: '100%' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routing />
      </ThemeProvider>
    </Container>
  );
}
