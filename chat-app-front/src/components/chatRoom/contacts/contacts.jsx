import React, { useEffect, useState } from "react";
import "./contacts.css";
import axios from "axios";
import { useAuth } from "../../../contexts/userDataContext";
const Contacts = ({ onContactClick }) => {
  const { userData } = useAuth();
  const currentUserId = userData.id;
  const data = {
    id: currentUserId,
  };
  const [contacts, setContacts] = useState([]);
  const getContacts = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/contacts", data);
      setContacts(response.data);
    } catch (error) {
      console.error({ error });
    }
  };
  useEffect(() => {
    getContacts();
  }, []);
  return (
    <React.Fragment>
      <div className={`contacts py-5 px-2 bg-light-white dark:bg-dark-white h-5/6 rounded-lg mx-4 my-3`}>
        <div className="flex justify-between items-center px-2 mb-3">
          <h3 className={`text-2xl font-bold text-light dark:text-dark `}>Chats</h3>
          <button className="bg-[#e2e8f0] py-2 px-5 rounded-lg text-[#475569] base-sm font-semibold">
            Add New +
          </button>
        </div>
        <div className="chats">
          <ul>
            {contacts.map((contact) => (
              <li
                key={contact.id}
                onClick={() => onContactClick(contact)}
                className="flex justify-between  p-3 w-100 cursor-pointer border-b border-light dark:border-dark select-none dark:hover:text-light"
              >
                <div className="flex flex-col">
                  <p className="font-bold text-light dark:text-dark text-lg">
                    {contact.username}
                  </p>
                  <div className="last-message">
                    <p className="text-base text-gray-500 ">How are you?</p>
                  </div>
                </div>
                <div className="message-time">
                  <span className="text-sm text-gray-500"></span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contacts;
