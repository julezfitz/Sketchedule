// import '././App.css';
import React from 'react';
import { Container } from '@mui/material';
import { useLocation } from 'react-router';
import Routing from './Routing';

export default function App() {
  // Track page changes
  const location = useLocation();

  return (
    <Container maxWidth="auto" sx={{ height: '100%' }}>
      <Routing
        location={location}
      />
    </Container>
  );
}
