import React from "react";
import "./conversation.css";
import sendIcon from "../../../assets/sendIcon.svg";
const Conversation = () => {
  return (
    <React.Fragment>
      <div className="conversation bg-[white] grow rounded-lg mx-4 relative">
        <div className="write-message w-11/12 m-auto bg-[#e2e8f0] absolute bottom-8 shadow shadow-[#8cb6ea] rounded-lg flex justify-end">
          <input
            type="text"
            placeholder="Type your message"
            className="w-full p-3 rounded-lg border-none text-[#334155] font-normal text-xl"
          />
          <button className="bg-[#60a5fa] w-14 rounded-r-lg flex items-center justify-center absolute h-full">
            <img
              src={sendIcon}
              alt=""
              className="color-[white]"
            />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Conversation;
