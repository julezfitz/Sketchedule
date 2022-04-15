import React, { useRef, useState, useEffect } from 'react';
import { Edit, Delete, NoEncryption } from '@mui/icons-material';
import {
  IconButton, Card, CardActionArea, Typography, Box,
} from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

export default function EditSchedule() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [title, setTitleValue] = useState('Default text');

  // useEffect(() => {
  //   console.log('value: ', inputRef.current.value);
  // });

  return (
    <Box>
      <Typography
        label="Schedule Title"
        id="title-display-field"
        // value={inputRef.current.value}
      >
        New Sketchedule - July 10, 2022
        <IconButton
          size="large"
          color="inherit"
          style={{ marginLeft: 2.5 }}
          // onClick={() => this.myTextField.focus()}
        >
          <Edit />
        </IconButton>
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
        <ImageListItem key="10">
          <Card
            sx={{ paddingLeft: '20%' }}
            style={{ minHeight: '80%', justifyContent: 'center', display: 'flex' }}
            variant="outlined"
            onClick={() => navigate('/new')}
          >
            <CardActionArea>
              <AddIcon
                sx={{ fontSize: 100, color: 'gray', justifyContent: 'center' }}
              />
            </CardActionArea>
          </Card>
        </ImageListItem>

        <ImageListItem key="11">
          <img
            alt="Clothing"
            src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            loading="lazy"
          />
          <IconButton
            size="medium"
            style={{ color: 'white', marginLeft: 130, position: 'absolute' }}
          >
            <Delete />
          </IconButton>

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
