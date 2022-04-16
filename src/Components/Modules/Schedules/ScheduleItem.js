import React, { useState } from 'react';
import {
  IconButton, Typography, Paper, Grid, MenuList, MenuItem, Menu, ListItemText, ListItemIcon,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function ScheduleItem({ name }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
              onClick={handleClick}
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
              onClose={handleClose}
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
                <MenuItem>
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
    </Paper>
  );
}
