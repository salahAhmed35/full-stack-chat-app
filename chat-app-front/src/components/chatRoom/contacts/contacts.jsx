import React , {useEffect} from "react";
import "./contacts.css";
import axios from "axios";
import { useAuth } from "../../../contexts/userDataContext";
const Contacts = () => {
  const {userData} = useAuth()
  const currentUserId = userData.id
  const data = {
    id : currentUserId
  }
  // fetch all of contacts from db except the current one 
  const getContacts = async () => {
    axios.post("http://127.0.0.1:5000/contacts" , data).then((response) => {
      console.log(response.data);
    }).catch(error => {
      console.error({"error" : error})
    })
  }
  useEffect(() => {
    getContacts()
  },[])
  return (
    <React.Fragment>
      <div className="contacts py-5 px-2 bg-[white] h-5/6 rounded-lg mx-4 my-3">
        <div className="flex justify-between items-center px-2 mb-3">
          <h3 className="text-2xl font-bold text-slate-700 ">Chats</h3>
          <button className="bg-[#e2e8f0] py-2 px-5 rounded-lg text-[#475569] base-sm font-semibold">Add New {" "} +</button>
        </div>
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
