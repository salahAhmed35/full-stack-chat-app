import React, { useEffect, useState } from "react";
import "./conversation.css";
import sendIcon from "../../../assets/sendIcon.svg";
import { useAuth } from "../../../contexts/userDataContext";
import axios from "axios";
const Conversation = ({ contact }) => {
  const [messagesList, setMessagesList] = useState([]);
  const [message , setMessage] = useState("")
  const {userData} = useAuth()
  const addNewMessge = (e) => { 
    const messageData = {
      senderId : userData.id,
      reciverId : contact.id,
      messageText : message
    }
    e.preventDefault()
    if(message !== ""){
      setMessagesList((prevMessages) => [...prevMessages , message])
      console.log(messageData);
      sendMessage(messageData)
      setMessage("")
    }
  }
  const sendMessage = async (messageDate) => {
    return axios.post("http://127.0.0.1:5000/add_message" , messageDate).catch((error) => {
      console.error({"error" : error})
    })
  }

  return (
    <React.Fragment>
      <div className="conversation bg-[white] grow rounded-lg mx-4 relative flex">
        <div className="conversation-header border-b border-solid border-gray-200 z-10 w-full p-3 rounded-t h-fit bg-[white]">
          <div className="current-friend flex items-center">
            <p className="friend-name mr-2 text-gray-500 font-bold">
              {contact.username}
            </p>
            <span className="bg-[#22c55e] p-1 rounded-full"></span>
          </div>
        </div>
        <div className="write-message  w-full text-center bg-[white] px-3 py-5 absolute bottom-0 border-t border-solid border-gray-200 z-10">
          <form action="submit" className="w-11/12 m-auto  rounded-lg flex justify-end focus:outline">
            <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
              type="text"
              placeholder="Type your message"
              className="w-full p-3 rounded-lg border-none text-[#334155] font-normal text-xl shadow shadow-[#8cb6ea]"
            />
            <button type="submit" className="bg-[#60a5fa] w-14 rounded-lg flex items-center justify-center ml-3" onClick={addNewMessge}>
              <img src={sendIcon} alt="send" className="color-[white]" />
            </button>
          </form>
        </div>
        <div className="conversation-messages p-3 grow flex absolute w-full h-5/6">
          <ul className="messages-list flex flex-col-reverse overflow-auto w-full h-full">
            {messagesList.map((message) => (
              <li className="right flex items-end">
                <div className="message">
                  <p className="message-content bg-[#60a5fa] text-[white] px-3 py-2 rounded font-semibold">
                    {message}
                  </p>
                  <span className="message-date text-xs text-gray-500 font-bold">
                    10:12 pm
                  </span>
                </div>
              </li>
            ))}
            <li className="left"></li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Conversation;
