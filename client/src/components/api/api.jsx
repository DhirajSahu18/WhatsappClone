import axios from 'axios';

//backend's url  
const url = "http://localhost:5000";
// const url = "https://whatsapp-clone-gspm.onrender.com";

const addUser = async (data) => {
    try {
        console.log('add new users data', data);
        const response = await axios.post(`${url}/adduser`, data);
        console.log('add new user response', response);

    } catch (error) {
        console.log("Error while addUser API", error.message);
    }
}

const allUsers = async () => {
    try {
        const response = await axios.get(`${url}/allusers`);
        return response.data;

    } catch (error) {
        console.log("Error while allUsers API", error.message);
    }
}

const setConversation = async (data) => {
    try {
        console.log("Starting conversation btn", data);
        const response = await axios.post(`${url}/conversation/add`, data);
        console.log("checking conversation status", response);

    } catch (error) {
        console.log("Error while setconversation API", error.message);
    }
}

const getConversation = async (data) => {
    try {
        console.log("getting conversation id", data);
        const response = await axios.post(`${url}/conversation/get`, data);
        return response.data;

    } catch (error) {
        console.log("Error while getConversation API", error.message);
    }
}

const newMessage = async (data) => {
    try {
        console.log("new message sending", data);
        const response = await axios.post(`${url}/message/add`, data);
        return response.data;
    } catch (error) {
        console.log("Error while newMessage API", error.message);
    }
}

const getMessage = async (id) => {
    try {
        console.log("getting all messages of the given id", id);
        const response = await axios.get(`${url}/message/get/${id}`);
        return response.data;
    } catch (error) {
        console.log("Error while getMessage API", error.message);
    }
}

export { addUser, allUsers, setConversation, getConversation, newMessage, getMessage };