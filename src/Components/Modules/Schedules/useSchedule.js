import React, { useRef, useState, useEffect } from 'react';
import { Typography, Stack } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import { useLocation } from 'react-router-dom';
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
  const title = location.state?.scheduleName;

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
