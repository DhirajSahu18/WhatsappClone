import React, { useContext } from 'react';

import { AccountContext } from '../../context/AccountProvider';

const ChatHeader = () => {

    const { person } = useContext(AccountContext);

    return (
        <>
            <div className="row heading">
                <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar">
                    <div className="heading-avatar-icon">
                        <img alt="" src={person.picture} />
                    </div>
                </div>
                <div className="col-sm-8 col-xs-7 heading-name">
                    <h6><strong className='mx-2' style={{ marginTop: "10px" }}>{person.name}</strong></h6>
                </div>
            </div>
        </>
    )
}

export default ChatHeader