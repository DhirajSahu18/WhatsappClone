import React, { useContext, useState } from 'react';

import { AccountContext } from '../context/AccountProvider';

// material-ui
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import ChatIcon from '@mui/icons-material/Chat';

// Header component
import HeaderMenu from './HeaderMenu';
import ProfileDrawer from './ProfileDrawer';

const Header = () => {

    const { account } = useContext(AccountContext);
    const [profileDrawer, setprofileDrawer] = useState(false);

    return (
        <>
            <div className="row heading">
                {/* drwawer to open the modal of user profile */}
                <ProfileDrawer profileDrawer={profileDrawer} setprofileDrawer={setprofileDrawer} />

                <div className="col-sm-5 col-xs-5 heading-avatar">
                    <div className="heading-avatar-icon">
                        <img alt="dp" src={account.picture} onClick={() => { setprofileDrawer(true) }} />
                        <h5 className="mb-0 mt-5 text-dark">{account.name}</h5>
                    </div>
                </div>
                <div className='col-sm-6 col-xs-6 d-flex justify-content-around'>
                    <div className="mt-2 m-3">
                        <HistoryToggleOffIcon />
                    </div>
                    <div className="mt-2 mr-3">
                        <ChatIcon />
                    </div>
                    <div className="mt-0">

                        {/* Dropdown */}
                        <HeaderMenu profileDrawer={profileDrawer} setprofileDrawer={setprofileDrawer} />
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header