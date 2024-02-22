import React, { useEffect, useState } from "react";
import Contacts from "./contacts/contacts";
import Header from "./header/header";
import Conversation from "./conversation/conversation";
import landingImage from "../../assets/landingImage.jpg";
const ChatRoom = () => {
  const [activeContact , setActiveContact] = useState(null)
  const DefaultLanding = () => {
    return (
      <>
        <div className="user-landing  h-5/6 rounded-lg mx-4 my-3 py-5 px-2 grow flex justify-center items-center flex-col">
          {/* this is the defult component if the user don't chating  */}
          <p className="text-4xl text-[#377cd0]">Start Chat Now</p>
          <p className="text-4xl mt-5 ">!!!</p>
        </div>
      </>
      );
  };
  useEffect(() => {
    console.log(activeContact);
  },[activeContact])
  return (
    <React.Fragment>
      <div className="chatRoom h-lvh bg-[#e2e8f0] flex flex-col">
        <Header />
        <div className="flex justify-between items-center grow">
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
