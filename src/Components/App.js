// import '././App.css';
import React from 'react';
import { Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Routing from './Routing';
import 'typeface-indie-flower';
import Unsplash from 'unsplash-js';

export default function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Indie Flower',
        'cursive',
      ].join(','),
    },
  });

  const unsplash = new Unsplash({
    applicationId: '{d24RfJCmlQx9cvBRGcGNvhn0PpPAlvyxRe0tNGzYRhU}',
    secret: process.env.UNSPLASH_SECRET,
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
