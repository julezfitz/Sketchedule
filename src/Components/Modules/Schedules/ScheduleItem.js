import React, { useState } from 'react';
import {
  Button, IconButton, Typography, Paper, Grid, MenuList, MenuItem, Menu, ListItemText, 
  ListItemIcon, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function ScheduleItem({ name }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOptionsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleOptionsClose = () => {
    setAnchorEl(null);
  };

  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleClickOpen = () => {
    setDeleteOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  return (
    <Paper variant="outlined" sx={{ p: 2, m: 1, flexGrow: 1 }} style={{ cursor: 'pointer' }}>
      <Grid container spacing={1}>
        <Grid item xs={16} sm container>
          <Grid item xs={13} container direction="column" spacing={1}>
            <Grid item xs>
              <Typography gutterBottom variant="h6" component="div">
                {name}
              </Typography>
            </Grid>
          </Grid>

          <Grid item>
            <IconButton
              size="large"
              color="inherit"
              style={{ marginLeft: '10%' }}
              id="options-button"
              aria-controls={open ? 'options-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleOptionsClick}
            >
              <MoreHorizIcon />
            </IconButton>

            <Menu
              id="options-menu"
              MenuListProps={{
                'aria-labelledby': 'options-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleOptionsClose}
            >
              <MenuList>
                <MenuItem>
                  <ListItemIcon
                    size="large"
                    color="inherit"
                  >
                    <Edit />
                  </ListItemIcon>
                  <ListItemText>Edit</ListItemText>
                </MenuItem>
                <MenuItem
                  onClick={handleClickOpen}
                >
                  <ListItemIcon
                    size="large"
                    color="inherit"
                  >
                    <Delete />
                  </ListItemIcon>
                  <ListItemText>Delete</ListItemText>
                </MenuItem>
              </MenuList>
            </Menu>
          </Grid>

        </Grid>
      </Grid>

      <Dialog
        open={deleteOpen}
        onClose={handleDeleteClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure you would like to delete this Sketchedule?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleDeleteClose}>Confirm Delete</Button>
          <Button onClick={handleDeleteClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
