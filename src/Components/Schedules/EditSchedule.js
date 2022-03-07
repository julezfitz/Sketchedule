import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import {
  IconButton, Card, CardContent, CardActionArea, CardMedia, Typography, Grid, Box, Paper,
} from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import AddIcon from '@mui/icons-material/Add';

export default function EditSchedule() {
  return (
    <Box sx={{ flexGrow: 1, minHeight: '60vh' }}>
      <Typography>
        New Sketchedule - July 10, 2022
        <IconButton
          size="large"
          color="inherit"
          style={{ marginLeft: 2.5 }}
        >
          <EditIcon />
        </IconButton>
      </Typography>
      <ImageList rowHeight={100} cols={2} gap={8} sx={{ height: 450 }}>
        <ImageListItem key={Math.random().toString(36).substr(2, 9)}>
          <Card
            sx={{ paddingLeft: '20%' }}
            style={{ minHeight: '22.5vh', justifyContent: 'center', display: 'flex' }}
            variant="outlined"
            alignItems="center"
          >
            <CardActionArea>
              <AddIcon
                sx={{ fontSize: 100, color: 'gray' }}
              />
            </CardActionArea>
          </Card>
        </ImageListItem>

        <ImageListItem key={Math.random().toString(36).substr(2, 9)}>
          <img
            src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Clothing"
            style={{ height: 150 }}
            loading="lazy"
          />
          <ImageListItemBar
            title="Get Dressed"
            position="below"
          />
        </ImageListItem>
        <ImageListItem key={Math.random().toString(36).substr(2, 9)}>
          <img
            src="https://images.unsplash.com/photo-1575783970733-1aaedde1db74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80"
            alt="Playground"
            style={{ height: 150 }}
            loading="lazy"
          />
          <ImageListItemBar
            title="Go to Playground"
            position="below"
          />
        </ImageListItem>
        <ImageListItem key={Math.random().toString(36).substr(2, 9)}>
          <img
            src="https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
            alt="Lunch"
            style={{ height: 150 }}
            loading="lazy"
          />
          <ImageListItemBar
            title="Get Lunch"
            position="below"
          />
        </ImageListItem>
      </ImageList>
    </Box>
  );
}
