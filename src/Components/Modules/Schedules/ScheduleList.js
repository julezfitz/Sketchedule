import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import ScheduleItem from './ScheduleItem';
import { db } from '../../../db';

const addButtonStyle = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
  width: 85,
  height: 85,
};

const addIcon = {
  fontSize: 70,
};

export default function ScheduleList() {
  const navigate = useNavigate();

  const todayDate = new Date(Date.now()).toLocaleDateString('en-ZA');

  const schedules = useLiveQuery(
    () => db.schedules
      .toArray(),
  );
  if (!schedules) return null;

  const createNewSchedule = async () => {
    try {
      // Add the new schedule
      const id = await db.schedules.add({
        name: `New Schedule - ${todayDate}`,
        dateCreated: new Date(),
      });
      navigate('/edit', { state: { scheduleID: id, scheduleName: `New Schedule - ${todayDate}` } });
    } catch (error) {
      console.log(`Failed to add: ${error}`);
    }
  };

  const deleteSchedule = async (scheduleToDelete) => {
    try {
      await db.schedules.delete(scheduleToDelete);
    } catch (error) {
      console.log(`Failed to delete: ${error}`);
    }
  };

  console.log(schedules);

  return (
    <Box sx={{ flexGrow: 1, minHeight: '60vh' }}>
      <Typography marginLeft={1.5}>My Sketchedules</Typography>
      <Grid container spacing={2} columns={16}>
        <Grid
          item
          xs={16}
          sx={{
            transition: '300ms ease',
            '&:hover > .MuiGrid-item': {
              opacity: 0.5,
            },

            '.MuiGrid-item:hover': {
              opacity: 1,
            },
            '.MuiGrid-item:hover .MuiTypography-root': {
              color: 'grey !important',
            },
          }}
        >
          <Grid container direction="row">
            {schedules.map((schedule) => (
              <Grid
                item
                xs={15}
                key={`${schedule.id} ${schedule.dateCreated}`}
              >
                <ScheduleItem
                  scheduleID={schedule.id}
                  name={schedule.name}
                  deleteSchedule={deleteSchedule}
                />
              </Grid>
            ))}
          </Grid>
          <Fab
            onClick={() => {
              createNewSchedule();
            }}
            color="secondary"
            style={addButtonStyle}
            aria-label="add new schedule"
          >
            <AddIcon style={addIcon} sx={{ fontSize: '200%' }} />
          </Fab>
        </Grid>
      </Grid>
    </Box>
  );
}
