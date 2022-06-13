import React, { useRef, useState, useEffect } from 'react';
import {
  Edit, Delete, CenterFocusStrong, KeyboardDoubleArrowDown,
} from '@mui/icons-material';
import {
  IconButton, Typography, Card, Stack, CardActionArea, Checkbox, Box, Grid,
} from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../../db';
import ViewScheduleItem from './ViewScheduleItem';

const titleStyle = {
  width: '100%',
  margin: 'auto',
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

  const handleItemCompleteChange = async (event, scheduleItemId) => {
    const complete = event.target.checked;
    try {
      await db.scheduleItems.update(scheduleItemId, { complete });
    } catch (error) {
      console.log(`Failed to update completion status: ${error}`);
    }
  };

  const scheduleItems = useLiveQuery(
    () => db.scheduleItems
      .where('scheduleID')
      .equals(scheduleID)
      .toArray(),
  );
  if (!scheduleItems) return null;

  console.log(scheduleItems);

  return (
    <Stack display="flex" sx={{ width: 200, margin: 'auto', overflowY: 'scroll' }}>
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
        cols={1}
        rowHeight={200}
        width={100}
        gap={8}
      >
        {scheduleItems.map((item) => (
          <ViewScheduleItem
            key={item.id + 50}
            handleItemCompleteChange={handleItemCompleteChange}
            item={item}
            scheduleItems={scheduleItems}
          />
        ))}
      </ImageList>
    </Stack>
  );
}
