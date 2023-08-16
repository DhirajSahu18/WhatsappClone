import React, { useState, useEffect, useContext } from 'react';
import './ChatDialog.css';

import { AccountContext } from '../context/AccountProvider';
import { allUsers } from '../api/api';

// components
// Left Side components
import Header from '../menu/Header';
import Search from '../menu/Search';
import SideUsers from '../users/SideUsers';

// Right Side components
import ChatBox from './chat/ChatBox';
import EmptyChat from './chat/EmptyChat';

const ChatDialog = () => {

    const { account, person } = useContext(AccountContext);

    const [users, setusers] = useState([]);
    const [search, setsearch] = useState('');

    useEffect(() => {
        const showUsers = async () => {

            const response = await allUsers(); // fetching all loggedin users data from backend

            // storing the users according to the dynamic search by user
            const filterData = response.filter((user) => {
                return (user.name.toLowerCase().includes(search.toLowerCase()));
            });
            setusers(filterData);
        }

        showUsers();
    }, [search])


    return (
        <>
            <div>
                <div className="container app">
                    <div className="row app-one">

                        {/* Left side Components -- header search users */}
                        <div className="col-sm-4 side">
                            <div className="side-one">

                                <Header />

                                <Search setsearch={setsearch} />

                                <div className="row sideBar">

                                    {
                                        users.map((preVal, i, arr) => {
                                            return (preVal.sub !== account.sub &&
                                                <SideUsers key={i} users={preVal} />)
                                        })
                                    }

                                </div>
                            </div>
                        </div>

                        {/* Right side Components -- chat Area */}
                        {/* agar person ka andhr koi bhi value stored h to chatbox dikhao varna EmptyChat dikhao */}
                        {
                            Object.keys(person).length ? <ChatBox /> : <EmptyChat />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatDialog