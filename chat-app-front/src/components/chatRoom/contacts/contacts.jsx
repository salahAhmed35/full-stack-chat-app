import React from "react";
import "./contacts.css";
const Contacts = () => {
  return (
    <React.Fragment>
      <div className="contacts py-5 px-2 bg-[#f0f9ff]">
        <h3 className="text-4xl font-bold text-slate-700 mb-5">Chats</h3>
        <div className="chats">
          <ul>
            <li className="flex justify-between  p-3 w-100 cursor-pointer border-b border-white-400 select-none">
              <div className="flex flex-col">
                <p className="font-bold text-gray-700 text-lg">Name of user</p>
                <div className="last-message">
                    <p className="text-base text-gray-500 ">Let me know?</p>
                </div>
              </div>
              <div className="message-time">
                <span className="text-sm text-gray-500">02:50 PM</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contacts;
