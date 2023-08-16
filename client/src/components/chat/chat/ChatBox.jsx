import React, { useContext, useState, useEffect } from 'react';

//chat components
import ChatHeader from './ChatHeader';
import ChatArea from './ChatArea';
import ChatFooter from './ChatFooter';

import { AccountContext } from '../../context/AccountProvider';
import { getConversation, newMessage } from '../../api/api';

const ChatBox = () => {

    const { account, person } = useContext(AccountContext);

    const [conversation, setconversation] = useState({});
    const [value, setvalue] = useState("");
    const [newMessageFlag, setnewMessageFlag] = useState(false);

    useEffect(() => {

        const getConversationDetails = async () => {

            // from here we will get conversatin._id which is created by mongodb database as unique value
            let data = await getConversation({
                senderId: account.sub,
                receiverId: person.sub
            })
            setconversation(data);
        }
        getConversationDetails();

    }, [person.sub])

    const sendText = async (e) => {

        const code = e.keyCode || e.which; // which key has been pressed on the keyboard
        if (code === 13) {
            let message = {
                senderId: account.sub,
                receiverId: person.sub,
                conversationId: conversation._id,
                type: 'text',
                text: value
            }
            
            await newMessage(message);

            setvalue(""); // removing all the text from footer textbox
            setnewMessageFlag((preVal) => { return !preVal })
        }
    }

    return (
        <>
            <div className="col-sm-8 conversation" style={{ height: "95vh" }}>

                <ChatHeader person={person} />
                <ChatArea person={person} conversation={conversation} newMessageFlag={newMessageFlag} />
                <ChatFooter setvalue={setvalue} sendText={sendText} value={value} />

            </div>
        </>
    )
}

export default ChatBox