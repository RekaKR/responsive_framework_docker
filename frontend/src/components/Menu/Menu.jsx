import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

const options = [
  'None',
  'Atria',
  'Callisto',
  'None',
  'Atria',
  'Callisto',
  'None',
  'Atria',
  'Callisto',
  'None',
  'Atria',
  'Callisto',
];

function HambMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu id="long-menu" anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: '200px',
            width: '200px',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default HambMenu;