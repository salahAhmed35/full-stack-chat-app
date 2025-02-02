import React, { useState } from "react";
import "./header.css";
import { useAuth } from "../../../contexts/userDataContext";
const Header = () => {
  const {userData} = useAuth()
  const [theme , setTheme] = useState("light")
  const toggleTheme = () => {
    if(document.documentElement.classList.contains("dark")){
      (document.documentElement.classList.remove("dark"))
    }else{
      (document.documentElement.classList.add("dark"))
    }    
    theme == "light" ? setTheme("dark") : setTheme("light")
  }
  return (
    <React.Fragment>
      <div className="header py-4 px-6 bg-blue-color flex items-center justify-between">
        <div className="logo">
          <h3 className="font-bold text-white text-2xl">chat app</h3>
        </div>
        <div className="flex items-center">
          <div
            className="theme-toggle flex justify-end items-center cursor-pointer"
            onClick={toggleTheme}
          >
            <div className={`${theme} toggle`}></div>
          </div>
          <div className="user ml-3 flex items-center">
            <div class="relative w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 avatar">
              <svg
                class="absolute w-9 h-9 text-gray-400 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="user-name ml-3 font-semibold text-white">
                <p>
                    {userData.username}
                </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
