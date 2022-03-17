import React, { useState } from 'react';
import { createApi } from 'unsplash-js';
import {
  TextField, Box, Grid,
} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';

export default function ImageSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const unsplash = createApi({
    applicationId: '{d24RfJCmlQx9cvBRGcGNvhn0PpPAlvyxRe0tNGzYRhU}',
    secret: process.env.UNSPLASH_SECRET,
  });

  const handleSearch = () => {
    unsplash.search.photos('cats', 1)
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <Box sx={{ flexGrow: 1, minHeight: '60vh' }}>
      <FormControl variant="standard" onSubmit={() => handleSearch()}>
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
      </FormControl>
      <Grid container spacing={2} columns={16}>
        <Grid
          item
          xs={16}
          sx={{
            transition: '300ms ease',
            '&:hover > .MuiGrid-item': {
              opacity: 0.5,
            },

            '.MuiGrid-item:hover': {
              opacity: 1,
            },
            '.MuiGrid-item:hover .MuiTypography-root': {
              color: 'grey !important',
            },
          }}
        >
          <Grid container direction="row">
            <Grid item xs={15} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
