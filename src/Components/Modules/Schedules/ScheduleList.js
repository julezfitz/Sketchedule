import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
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

  const createNewSchedule = async () => {
    console.log('create new schedule!');

    try {
      // Add the new schedule
      const id = await db.schedules.add({
        name: 'New Schedule',
        dateCreated: new Date(),
      });

      console.log(id);
    } catch (error) {
      console.log(`Failed to add: ${error}`);
    }
  };
  //   const [schedules, setSchedules] = useState([]);

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
            <Grid item xs={15}>
              <ScheduleItem
                key="20"
                name="Trip to Grocery Store"
              />
            </Grid>
            <Grid item xs={15}>
              <ScheduleItem
                key="21"
                name="Saturday"
              />
            </Grid>
            <Grid item xs={15}>
              <ScheduleItem
                key="22"
                name="School Day"
              />
            </Grid>
            <Grid item xs={15}>
              <ScheduleItem
                key="23"
                name="Trip To The Grocery Store"
              />
            </Grid>
            <Grid item xs={15}>
              <ScheduleItem
                key="24"
                name="Visit to Grandpa's"
              />
            </Grid>
            <Grid item xs={15}>
              <ScheduleItem
                key="25"
                name="Visit to the Doctor"
              />
            </Grid>
            <Grid item xs={15}>
              <ScheduleItem
                key="23"
                name="Trip To The Grocery Store"
              />
            </Grid>
            <Grid item xs={15}>
              <ScheduleItem
                key="24"
                name="Visit to Grandpa's"
              />
            </Grid>
            <Grid item xs={15}>
              <ScheduleItem
                key="25"
                name="Visit to the Doctor"
              />
            </Grid>
          </Grid>
          <Fab
            onClick={() => {
              createNewSchedule();
              navigate('/edit');
            }}
            color="secondary"
            style={addButtonStyle}
            aria-label="add new schedule"
          >
            <AddIcon style={addIcon} labelStyle={{ fontSize: '200%' }} />
          </Fab>
        </Grid>
      </Grid>
    </Box>
  );
}
