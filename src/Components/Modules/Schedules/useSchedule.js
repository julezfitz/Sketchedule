import React, { useRef, useState, useEffect } from 'react';
import { Edit, Delete } from '@mui/icons-material';
import {
  IconButton, Typography, Card, CardActionArea, Checkbox, Box,
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
  fontSize: 25,
};

export default function useSchedule() {
  const location = useLocation();
  const scheduleID = location.state?.scheduleID;

  const navigate = useNavigate();
  const inputRef = useRef(null);
  const title = location.state?.scheduleName;
//   const [complete, setComplete] = useState(true);

  const scheduleItems = useLiveQuery(
    () => db.scheduleItems
      .where('scheduleID')
      .equals(scheduleID)
      .toArray(),
  );
  if (!scheduleItems) return null;

  const handleItemCompleteChange = async (event, scheduleItemId) => {
    const complete = event.target.checked;
    try {
      await db.scheduleItems.update(scheduleItemId, { complete });
    } catch (error) {
      console.log(`Failed to update completion status: ${error}`);
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
      <Typography
        id="title-display-field"
        sx={titleStyle}
        variant="standard"
      >
        {title}
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
        {scheduleItems.map((item) => (
          <ImageListItem key={item.id + 50}>
            <img
              alt={item.altText}
              src={item.imageSrc}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.imageLabel}
              actionIcon={(
                <Checkbox
                  size="medium"
                  checked={item.complete}
                  onChange={(event) => handleItemCompleteChange(event, item.id)}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.54)',
                    '&.Mui-checked': {
                      color: 'rgba(255, 255, 255, 0.54)',
                    },
                  }}
                  aria-label="mark as complete"
                />
              )}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
