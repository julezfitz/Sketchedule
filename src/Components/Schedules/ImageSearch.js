import React, { useState } from 'react';
import { createApi } from 'unsplash-js';
import {
  TextField, Box, Grid, Button,
} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function ImageSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const unsplash = createApi({
    accessKey: 'd24RfJCmlQx9cvBRGcGNvhn0PpPAlvyxRe0tNGzYRhU',
    // secret: process.env.UNSPLASH_SECRET,
  });

  const handleSearch = () => {
    console.log(searchTerm);
    unsplash.search.getPhotos({
      query: searchTerm,
      page: 1,
      perPage: 10,
    })
      .then((response) => {
        setSearchResults(response.response.results);
      });
  };

  console.log(searchResults);

  return (
    <Box sx={{ flexGrow: 1, minHeight: '60vh' }}>
      <TextField
        id="outlined-basic"
        label="Search"
        placeholder="ex. Playground"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
      <Button
        variant="success"
        onClick={() => handleSearch()}
      >
        Search
      </Button>

      <ImageList
        sx={{
          img: {
            minHeight: '80%',
          },
          div: {
            minHeight: '20%',
          },
        }}
        cols={2}
        rowHeight={150}
        gap={8}
      >
        {searchResults.map((image) => (
          <ImageListItem key={Math.random().toString(36).substr(2, 9)}>
            <img
              style={{ borderRadius: '6px' }}
              src={image.urls.thumb}
              alt={image.description}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
