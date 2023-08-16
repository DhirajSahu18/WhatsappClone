import React, { useEffect, useState } from 'react';

// chatArea components
import Message from './Message';
import { getMessage } from '../../api/api';

const ChatArea = (props) => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {

        const getMessageDetails = async () => {

            let data = await getMessage(props.conversation._id)
            setMessages(data);
        }
        props.conversation._id && getMessageDetails();
    }, [props.person._id, props.conversation._id, props.newMessageFlag])


    return (
        <>
            <div className="row message d-flex flex-column" id="conversation">

                {
                    messages && messages.map((preVal) => {
                        return (<Message message={preVal} />)
                    })
                }

            </div>
        </>
    )
}

export default ChatArea