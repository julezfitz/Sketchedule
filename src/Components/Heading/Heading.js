import React, { forwardRef, useState } from 'react';
import { Box, Tooltip, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import StyledHeading from './styles/styles';
import UserMenu from './UserMenu';

function Heading(props, ref) {
  const {
    className, size, color, style, children, settings,
  } = props;

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <StyledHeading
      className={`heading-wrapper ${className || ''}`}
      size={size}
      color={color}
      style={style}
    >
      <h2 ref={ref}>{children}</h2>

      <Box sx={{ maxWidth: '150px' }}>
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
    </StyledHeading>
  );
}

export default forwardRef(Heading);
