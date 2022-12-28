import React, { useState } from 'react';
import {
  Typography, Stack, Button, Box,
} from '@mui/material';
import {
  RestartAlt, CheckCircleOutline, CheckCircle,
} from '@mui/icons-material';
import ImageList from '@mui/material/ImageList';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../../db';
import ViewScheduleItem from './ViewScheduleItem';

const titleStyle = {
  width: '100%',
  margin: 'auto',
  border: 'none',
  marginBottom: '5%',
  fontSize: 25,
  fontWeight: 600,
};

export default function useSchedule() {
  const location = useLocation();
  const [completeSchedule, setCompleteSchedule] = useState(false);
  const scheduleID = location.state?.scheduleID;
  const title = location.state?.scheduleName;
  const navigate = useNavigate();

  const handleItemCompleteChange = async (completeStatus, scheduleItemId) => {
    const complete = completeStatus;
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

  const unCheckAll = () => {
    scheduleItems.map(async (item) => {
      try {
        await db.scheduleItems.update(item.id, { complete: false });
      } catch (error) {
        console.log(`Failed to update completion status: ${error}`);
      }
    });
  };

  const handleComplete = () => {
    unCheckAll();
    navigate('/');
  };

  return (
    <>
      {completeSchedule === false
      && (
      <Stack display="flex" sx={{ width: 200, margin: 'auto', overflowY: 'scroll' }}>
        <Typography
          id="title-display-field"
          sx={titleStyle}
          align="center"
          variant="standard"
        >
          {title}
        </Typography>
        {scheduleItems.length > 0
          ? (
            <>
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
                    lastItem={scheduleItems.indexOf(item) === scheduleItems.length - 1}
                  />
                ))}
              </ImageList>
              <Button
                aria-label="complete schedule"
                variant="contained"
                disabled={scheduleItems?.filter((item) => item.complete === false).length > 0}
                color="success"
                sx={{ fontSize: 'medium', marginBottom: '1rem' }}
                onClick={() => setCompleteSchedule(true)}
                startIcon={<CheckCircleOutline sx={{ fontColor: 'white' }} />}
              >
                Complete
              </Button>
              <Button
                aria-label="reset checked items"
                variant="contained"
                sx={{ fontSize: 'medium', color: 'white', backgroundColor: 'purple' }}
                onClick={() => unCheckAll()}
                startIcon={<RestartAlt sx={{ fontColor: 'white' }} />}
              >
                Reset All
              </Button>
            </>
          )
          : (
            <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
              <Typography>You have no schedule items.</Typography>
              <Button variant="contained" onClick={() => navigate('/edit', { state: { ...location.state } })} sx={{ marginTop: '1rem' }}>Edit Schedule</Button>
            </Box>
          )}
      </Stack>
      )}
      {completeSchedule === true
     && (
     <Box sx={{ marginTop: '6rem', textAlign: 'center' }}>
       <CheckCircle sx={{ fontSize: '6rem' }} color="success" />
       <Typography variant="h5" sx={{ marginTop: '1rem' }}>Hooray! You did it!</Typography>
       <Button onClick={() => handleComplete()} variant="contained" sx={{ marginTop: '4rem' }}>Back To Schedules</Button>
     </Box>
     )}
    </>
  );
}
