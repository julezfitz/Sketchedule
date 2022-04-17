import React from 'react';
import { Typography, Box } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import Item from '../../Item';

const scheduleItems = [
  {
    itemName: 'Get Lunch',
    alt: 'Lunch',
    imageURL: 'https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
  },
  {
    itemName: 'Get Dressed',
    alt: 'Clothing',
    imageURL: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
  },
  {
    itemName: 'Go To Playground',
    alt: 'Lunch',
    imageURL: 'https://images.unsplash.com/photo-1575783970733-1aaedde1db74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
  },
  {
    itemName: 'Get Lunch',
    alt: 'Lunch',
    imageURL: 'https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
  },
];
export default function ScheduleUseView() {
  return (
    <Box>
      <Typography variant="h5">
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
        {scheduleItems.map((scheduleItem) => (
          <Item
            itemName={scheduleItem.itemName}
            alt={scheduleItem.alt}
            imageURL={scheduleItem.imageURL}
          />
        ))}
      </ImageList>
    </Box>
  );
}
