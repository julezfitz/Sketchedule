import React from 'react';
import { Menu, MenuItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const MENULINKSTYLES = {
  textDecoration: 'none',
  color: 'inherit',
  height: '100%',
  width: '100%',
  textAlign: 'left',
  padding: '0.6rem 2rem',
  transition: '300ms ease',
};

function UserMenu({
  settings,
  anchorElUser,
  handleCloseUserMenu,
}) {
  return (
    <Menu
      sx={{ mt: '45px' }}
      id="menu-appbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      {settings.map((setting) => (
        <MenuItem
          onClick={handleCloseUserMenu}
          key={setting.path}
          sx={{
            padding: 0,
            '& p': { textAlign: 'left' },
            transition: '300ms ease',
          }}
        >
          <Link
            to={setting.path}
            className="menuLink"
            style={MENULINKSTYLES}
          >
            <Typography
              textAlign="center"
              color="black"
            >
              {setting.headingTitle}
            </Typography>
          </Link>
        </MenuItem>
      ))}
    </Menu>
  );
}

export default UserMenu;
