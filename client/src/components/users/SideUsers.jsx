import React, { useContext } from 'react';

import { setConversation } from '../api/api';
import { AccountContext } from '../context/AccountProvider';

const SideUsers = (props) => {

    const { setPerson, account } = useContext(AccountContext);

    const setUser = async () => {
        // storing the value of chatting person after clicking the side nav user's card
        setPerson(props.users);

        await setConversation({
            senderId: account.sub,
            receiverId: props.users.sub
        });
    }

    return (
        <>
            <div className="row sideBar-body" onClick={setUser} >
                <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                        <img alt="" src={props.users.picture} />
                    </div>
                </div>
                <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                        <div className="col-sm-8 col-xs-8 sideBar-name">
                            <span className="name-meta">{props.users.name}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideUsers