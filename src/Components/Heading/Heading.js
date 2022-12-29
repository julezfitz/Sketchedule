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
    <Stack direction="row" spacing={2} marginTop="10%" sx={{ textAlign: 'center' }}>
      <Typography variant="h3" color="purple" marginTop="5%" paddingLeft="5%" sx={{ width: '90%' }}>
        VisuSchedule
      </Typography>

      <Box sx={{ right: '5%', position: 'absolute' }}>
        <Tooltip title="Menu">
          <IconButton disableRipple onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <MenuIcon sx={{ fontSize: '2rem', marginTop: '1rem' }} />
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
