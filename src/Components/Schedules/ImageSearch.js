import React, { useState } from 'react';
import { createApi } from 'unsplash-js';
import {
  TextField, Box,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import { styled } from '@material-ui/core/styles';

// style search box
const SearchBox = styled(TextField)(() => ({
  '& fieldset': {
    borderRadius: '25px',
    borderWidth: '2px',
  },
}));

export default function ImageSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const unsplash = createApi({
    accessKey: 'd24RfJCmlQx9cvBRGcGNvhn0PpPAlvyxRe0tNGzYRhU',
    // secret: process.env.UNSPLASH_SECRET,
  });

  const handleSearch = () => {
    unsplash.search.getPhotos({
      query: searchTerm,
      page: 1,
      perPage: 10,
    })
      .then((response) => {
        setSearchResults(response.response.results);
      });
  };

  return (
    <Box sx={{ flexGrow: 1, minHeight: '60vh' }}>
      <SearchBox
        id="outlined-basic"
        placeholder="Search"
        value={searchTerm}
        key="searchField"
        onChange={(e) => setSearchTerm(e.target.value)}
        variant="outlined"
        fullWidth
        InputProps={{
          endAdornment: (
            <IconButton
              aria-label="search"
              style={{
                opacity: 1.0, transform: 'translate(14px)', width: '55px', height: '55px',
              }}
              sx={{ backgroundColor: 'gray', backgroundOpacity: '100%', color: 'white', fontSize: '190%' }}
              onClick={() => handleSearch()}
            >
              <SearchIcon style={{ width: '100%', height: '100%' }} />
            </IconButton>
          ),
        }}
      />

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
