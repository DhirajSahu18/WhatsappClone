import React from 'react';
import Drawer from '@mui/material/Drawer';

import Profile from './Profile';

const ProfileDrawer = ({profileDrawer, setprofileDrawer}) => {

    const handleClose = () => {
        setprofileDrawer(false);
    }

    const drawerStyle = {
        height: "100%",
        width: "20%",
        boxShadow: "none"
    }

  return (
    <>
          <Drawer
            open={profileDrawer}
            onClose={handleClose}
            style={{zIndex: 1500}}
            PaperProps={{sx: drawerStyle}}
          >
            <Profile />
          </Drawer>
    </>
  )
}

export default ProfileDrawer