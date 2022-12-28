import React, { useState } from 'react';
import {
  IconButton, Box, Button, Typography, Paper, Grid, Dialog,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function ScheduleItem({ name, scheduleID, deleteSchedule }) {
  const navigate = useNavigate();
  const [deleteInProgress, setDeleteInProgress] = useState(false);

  const handleDelete = () => {
    deleteSchedule(scheduleID);
    setDeleteInProgress(false);
  };

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2, m: 1, flexGrow: 1, cursor: 'pointer', justifyContent: 'center',
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={16} sm container>
          <Grid item xs container direction="column" spacing={8}>
            <Grid item xs>
              <Typography
                gutterBottom
                variant="subtitle1"
                component="div"
                onClick={() => navigate('/view', { state: { scheduleID, scheduleName: name } })}
              >
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
              onClick={() => setDeleteInProgress(true)}
            >
              <Delete />
            </IconButton>
          </Grid>

        </Grid>
      </Grid>
      <Dialog
        open={deleteInProgress}
        sx={{ justifyContent: 'center', textAlign: 'center' }}
        PaperProps={{
          sx: { height: '8rem', padding: '1rem' },
        }}
      >
        Are you sure you would like to delete this schedule?
        <Box>
          <Button
            variant="contained"
            type="submit"
            sx={{ display: 'inline', fontFamily: 'Verdana', margin: '0.5rem' }}
            color="success"
            onClick={() => handleDelete()}
          >
            Confirm

          </Button>
          <Button
            variant="contained"
            type="submit"
            sx={{ display: 'inline', fontFamily: 'Verdana', margin: '0.5rem' }}
            color="error"
            onClick={() => setDeleteInProgress(false)}
          >
            Cancel

          </Button>
        </Box>
      </Dialog>
    </Paper>
  );
}
