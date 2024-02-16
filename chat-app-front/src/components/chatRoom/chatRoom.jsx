import React from "react";
import Contacts from "./contacts/contacts";
import Header from "./header/header";
import Conversation from "./conversation/conversation";
const ChatRoom = () => {
  return (
    <React.Fragment>
      <div className="chatRoom h-lvh bg-[#e2e8f0] flex flex-col">
        <Header />
        <div className="flex justify-between items-center grow">
          <Contacts />
          <Conversation />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChatRoom;
