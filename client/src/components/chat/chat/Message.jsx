import React, { useContext } from 'react';

// Message components
import FormatDate from '../../Functions/FormatDate';
import { AccountContext } from '../../context/AccountProvider';

const Message = (props) => {

    const { account } = useContext(AccountContext);

    return (
        <>
            {
                account.sub === props.message.senderId ?
                    <div className="row message-body">
                        <div className="col-sm-12 message-main-sender">
                            <div className="sender">
                                <div className="message-text">
                                    {props.message.text}
                                </div>
                                <span className="message-time pull-right">
                                    <FormatDate createdAt={props.message.createdAt} />
                                </span>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="row message-body">
                        <div className="col-sm-12 message-main-receiver">
                            <div className="receiver">
                                <div className="message-text">
                                    {props.message.text}
                                </div>
                                <span className="message-time pull-right">
                                    <FormatDate createdAt={props.message.createdAt} />
                                </span>
                            </div>
                        </div>
                    </div>
            }

        </>
    )
}

export default Message