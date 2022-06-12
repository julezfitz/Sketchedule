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

export default function useSchedule() {
  const location = useLocation();
  const scheduleID = location.state?.scheduleID;

  const navigate = useNavigate();
  const inputRef = useRef(null);
  const title = location.state?.scheduleName;
  const [complete, setComplete] = useState(true);


  const scheduleItems = useLiveQuery(
    () => db.scheduleItems
      .where('scheduleID')
      .equals(scheduleID)
      .toArray(),
  );
  if (!scheduleItems) return null;

  const handleItemCompleteChange = async (scheduleItemId) => {
    try {
      await db.scheduleItems.update(scheduleItemId, { complete: complete });
    } catch (error) {
      console.log(`Failed to update title: ${error}`);
    }
  };

  const toggleVerticalView = () => {
    if (disabled) {
        setComplete(false);
    } else {
        setComplete(true);
    }
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
        variant="standard"
        InputProps={{ style: { fontSize: 22 } }}
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
            //   onClick={() => handleDeleteItem(item.id)}
            >
              <Delete />
            </IconButton>

            <ImageListItemBar
              title={item.imageLabel}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
