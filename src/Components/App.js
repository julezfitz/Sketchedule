// import '././App.css';
import React from 'react';
import { Container } from '@mui/material';
import Routing from './Routing';

export default function App() {
  return (
    <Container maxWidth="auto" sx={{ height: '100%' }}>
      <Routing />
    </Container>
  );
}
