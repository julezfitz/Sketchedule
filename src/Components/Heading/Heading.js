import React, { forwardRef, useState } from 'react';
import {
  Box, Tooltip, Typography, IconButton, Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// import StyledHeading from './styles/styles';
import UserMenu from './UserMenu';

function Heading(props) {
  const {
    settings,
  } = props;

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Stack direction="row" spacing={2} marginTop="10%">
      <Typography variant="h3" color="purple" marginTop="5%" marginLeft="17%">
        VisuSchedule
      </Typography>

      <Box sx={{ maxWidth: '150px', marginLeft: '12%' }}>
        <Tooltip title="Menu">
          <IconButton disableRipple onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <MenuIcon />
          </IconButton>
        </Tooltip>
        <UserMenu
          settings={settings}
          handleCloseUserMenu={handleCloseUserMenu}
          anchorElUser={anchorElUser}
        />
      </Box>
    </Stack>
  );
}

export default forwardRef(Heading);
