import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

export default function ImageSearch() {
  return (
    <Box sx={{ flexGrow: 1, minHeight: '60vh' }}>
      <Typography>Search</Typography>
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
            <Grid item xs={15}>
              Hello
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
