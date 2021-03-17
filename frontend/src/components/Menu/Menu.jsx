import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/styles';

const useStyles = makeStyles({
  menu: {
    width: '100px',
    height: '100px',
    position: 'fixed',
    top: '30px',
    right: '20px',
  },
  iconB: {
    width: '100%',
    minWidth: '60px',
    height: '100%',
    color: 'black',
    stroke: "black",
    backgroundColor: 'white',
    '&:hover': {
      stroke: "white",
      fill: 'white',
      color: 'white',
      backgroundColor: 'black'
    },
  },
});

const options = [
  "HOME",
  "JOBS",
  "APPLY",
];

function HambMenu() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.menu}>
      <IconButton className={classes.iconB} aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon className={classes.icon} style={{ fontSize: 70 }} />
      </IconButton>

      <Menu id="long-menu" anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}
        PaperProps={{
          style: {
            width: '150px',
            minHeight: '150px',
          }
        }}>
        {options.map((option) => (
          <MenuItem key={uuidv4()} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div >
  );
}

export default HambMenu;