import React, { useState } from 'react';
import { Checkbox } from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function Item(props) {
  const { alt, imageURL, itemName } = props;
  const [opacity, setOpacity] = useState(1);

  const toggleOpacity = () => {
    setOpacity((curr) => (curr < 1 ? 1 : 0.5));
  };

  return (
    <ImageListItem sx={{ opacity }}>
      <img
        alt={alt}
        src={imageURL}
        loading="lazy"
      />
      <Checkbox
        onChange={() => toggleOpacity()}
        size="large"
        style={{ color: 'white', marginLeft: 130, position: 'absolute' }}
      />
      <ImageListItemBar
        title={itemName}
        position="below"
      />
    </ImageListItem>
  );
}
