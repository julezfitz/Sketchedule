import React, { useRef, useState, useEffect } from 'react';
import { Edit, Delete } from '@mui/icons-material';
import {
  IconButton, Card, CardActionArea, Box,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../../db';

const titleStyle = {
  width: '70%',
  border: 'none',
  marginBottom: '5%',
};

export default function EditSchedule() {
  const todayDate = new Date(Date.now()).toLocaleDateString('en-ZA');

  const location = useLocation();
  const scheduleID = location.state?.scheduleID;

  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [title, setTitleValue] = useState(`New Schedule - ${todayDate}`);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (!disabled) {
      inputRef.current.focus();
    }
  }, [disabled]);

  const scheduleItems = useLiveQuery(
    () => db.scheduleItems
      .where('scheduleID')
      .equals(scheduleID)
      .toArray(),
  );
  if (!scheduleItems) return null;

  const toggleEdit = () => {
    if (disabled) {
      setDisabled(false);
      inputRef.current.focus();
    } else {
      setDisabled(true);
    }
  };

  const handleDeleteItem = () => {
    console.log('removed item');
  };

  console.log(scheduleItems);

  return (
    <Box>
      <TextField
        id="title-display-field"
        sx={titleStyle}
        ref={inputRef}
        value={title}
        inputRef={inputRef}
        disabled={disabled}
        onChange={(e) => setTitleValue(e.target.value)}
        variant="standard"
        InputProps={{ style: { fontSize: 22 } }}
        onBlur={() => { toggleEdit(); }}
      />
      <IconButton
        size="large"
        color="inherit"
        style={{ marginLeft: 2.5, paddingBottom: 1 }}
        onClick={() => { toggleEdit(); }}
      >
        <Edit />
      </IconButton>
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
            onClick={() => navigate('/new', { state: { scheduleID } })}
          >
            <CardActionArea>
              <AddIcon
                sx={{ fontSize: 100, color: 'gray', justifyContent: 'center' }}
              />
            </CardActionArea>
          </Card>
        </ImageListItem>

        {scheduleItems.map((item) => (
          <ImageListItem key={item.id + 50}>
            <img
              alt={item.altText}
              src={item.imageSrc}
              loading="lazy"
            />
            <IconButton
              size="medium"
              style={{ color: 'white', marginLeft: 130, position: 'absolute' }}
              onClick={() => handleDeleteItem()}
            >
              <Delete />
            </IconButton>

            <ImageListItemBar
              title={item.imageLabel}
              position="below"
            />
          </ImageListItem>
        ))}
        <ImageListItem key="11">
          <img
            alt="Clothing"
            src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            loading="lazy"
          />
          <IconButton
            size="medium"
            style={{ color: 'white', marginLeft: 130, position: 'absolute' }}
            onClick={() => handleDeleteItem()}
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
