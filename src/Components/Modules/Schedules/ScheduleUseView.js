import React from 'react';
import { Typography, Box } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function ScheduleUseView() {
  return (
    <Box>
      <Typography>
        Saturday Activities
      </Typography>
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
        <ImageListItem key="11">
          <img
            alt="Clothing"
            src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            loading="lazy"
          />
          <ImageListItemBar
            title="Get Dressed"
            position="below"
          />
        </ImageListItem>
        <ImageListItem key="12">
          <img
            src="https://images.unsplash.com/photo-1575783970733-1aaedde1db74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            alt="Playground"
            loading="lazy"
          />
          <ImageListItemBar
            title="Go to Playground"
            position="below"
          />
        </ImageListItem>
        <ImageListItem key="13">
          <img
            src="https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            alt="Lunch"
            loading="lazy"
          />
          <ImageListItemBar
            title="Get Lunch"
            position="below"
          />
        </ImageListItem>
        <ImageListItem key="14">
          <img
            src="https://images.unsplash.com/photo-1575783970733-1aaedde1db74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            alt="Playground"
            loading="lazy"
          />
          <ImageListItemBar
            title="Go to Playground"
            position="below"
          />
        </ImageListItem>
        <ImageListItem key="15">
          <img
            alt="Clothing"
            src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            loading="lazy"
          />
          <ImageListItemBar
            title="Get Dressed"
            position="below"
          />
        </ImageListItem>
      </ImageList>
    </Box>
  );
}
