import React, { useEffect, useState } from "react";
import Contacts from "./contacts/contacts";
import Header from "./header/header";
import Conversation from "./conversation/conversation";
import messageImage from "../../assets/message.png"
import "./chatRoom.css"
const ChatRoom = () => {
  const [activeContact , setActiveContact] = useState(null)
  const DefaultLanding = () => {
    return (
      <>
        <div className="user-landing  h-5/6 rounded-lg mx-4 my-3 py-5 px-2 grow flex justify-center items-center flex-col">
          <img src={messageImage} alt="" className="w-75 mb-4 bg-[#93c5fd] rounded-3xl p-4"/>
          {/* this is the defult component if the user don't chating  */}
          <p className="text-4xl text-[#377cd0] dark:text-dark font-semibold">Welcome to Chat App</p>
          <p className="text-4xl mt-5 text-[#377cd0] dark:text-dark font-semibold">!!!</p>
        </div>
      </>
      );
  };
  return (
    <React.Fragment>
      <div className="chatRoom h-lvh flex flex-col">
        <Header />
        <div className="flex justify-between items-center grow bg-light-gray dark:bg-dark-gray conversation-container">
          <Contacts onContactClick={(contact) => setActiveContact(contact)} />
          {
            !activeContact ? <DefaultLanding/> : <Conversation contact = {activeContact}/> 
          }
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChatRoom;
