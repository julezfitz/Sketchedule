import React from 'react';
import {
  IconButton, Typography, Paper, Grid,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function ScheduleItem({ name, scheduleID, deleteSchedule }) {
  const navigate = useNavigate();

  return (
    <Paper variant="outlined" sx={{ p: 2, m: 1, flexGrow: 1 }} style={{ cursor: 'pointer' }}>
      <Grid container spacing={1}>
        <Grid item xs={16} sm container>
          <Grid item xs container direction="column" spacing={8}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {name}
              </Typography>
            </Grid>
          </Grid>

          <Grid item>
            <IconButton
              size="large"
              color="inherit"
              style={{ marginLeft: 2.5 }}
              onClick={() => navigate('/edit', { state: { scheduleID, scheduleName: name } })}
            >
              <Edit />
            </IconButton>

            <IconButton
              size="large"
              color="inherit"
              style={{ marginLeft: 0 }}
              onClick={() => deleteSchedule(scheduleID)}
            >
              <Delete />
            </IconButton>
          </Grid>

        </Grid>
      </Grid>
    </Paper>
  );
}
