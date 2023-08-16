// dropdown
import * as React from 'react';

// material-ui
import Button from '@mui/joy/Button';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';

export default function BasicMenu({ profileDrawer, setprofileDrawer }) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <Button
        id="basic-demo-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        color="neutral"
        onClick={handleClick}
        margin="0px"
        padding="0px"
      >
        <i className="fa fa-ellipsis-v fa-2x  pull-right" aria-hidden="true" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        aria-labelledby="basic-demo-button"
        style={{ background: "#fff" }}
      >
        <MenuItem onClick={() => {
          handleClose(); //closes the dropdown
          setprofileDrawer(true);
        }}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>New Group</MenuItem>
        <MenuItem onClick={handleClose}>Starred Message</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}