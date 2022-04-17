import React, { useRef, useState } from 'react';
import { Checkbox } from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function Item() {
  const [opacity, setOpacity] = useState(0.5);

  const toggleOpacity = () => {
    setOpacity((curr) => (curr < 1 ? 1 : 0.5));
  };

  return (
    <ImageListItem sx={{ opacity }}>
      <img
        alt="Clothing"
        src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
        loading="lazy"
      />
      <Checkbox
        defaultChecked
        onChange={() => toggleOpacity()}
        size="large"
        style={{ color: 'white', marginLeft: 130, position: 'absolute' }}
      />
      <ImageListItemBar
        title="Get Dressed"
        position="below"
      />
    </ImageListItem>
  );
}
