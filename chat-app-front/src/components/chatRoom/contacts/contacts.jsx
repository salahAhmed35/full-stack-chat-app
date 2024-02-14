import React from "react";
import "./contacts.css";
const Contacts = () => {
  return (
    <React.Fragment>
      <div className="contacts p-5 bg-[#f0f9ff]">
        <h3 className="text-4xl font-bold text-slate-700 mb-5">Chats</h3>
        <div className="chats">
          <ul>
            <li className="flex justify-between items-center py-2 w-100 cursor-pointer">
              <div className="flex flex-col">
                <p className="font-bold text-gray-700 text-lg">Name of user</p>
                <div className="last-message">
                    <p className="text-base text-gray-500 ">Let me know?</p>
                </div>
              </div>
              <div className="message-time">
                <span>02:50 PM</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contacts;
