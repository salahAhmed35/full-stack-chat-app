import React, { useState } from "react";
import axios from "axios";
const Register = () => {
  const [username , setUsername] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [message , setMessage] = useState("")
  const [error , setError] = useState("")
  const userData = {
    username , 
    email ,
    password
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    axios.post("http://127.0.0.1:5000/register",userData)
    .then(response => {
      if(response.status === 200){
        setMessage("Successful registration")
      }
    }).catch((error) => {
      if(error.response.status === 409){
        setError("This Email is already exist !")
      }
    })
  }
  return (
    <div className="flex justify-center items-center h-full bg-gray-300 bg-custom-background">
      <div className="flex  flex-col justify-center px-6 py-12 lg:px-8 bg-white w-450 rounded-lg">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create a new account
          </h2>
        </div>
        {message ? <p className="text-center p-3 my-2 bg-[#86efac] rounded-md font-semibold text-[#022c22]">{message}</p> : <></>}
        {error ? <p className="text-center p-3 my-2 bg-[#fecaca] rounded-md font-semibold text-[red]">{error}</p> : <></>}
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="submit" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-900 leading-6"
              >
                Username
              </label>
              <div className="mt-2">
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                id="username"
                name="username"
                required
                className="px-2 py-3 block w-full rounded-md py-1.5 text-gray-900 shadow-sm border-solid border border-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="px-2 py-3  block w-full rounded-md py-1.5 text-gray-900 shadow-sm border-solid border border-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="px-2 py-3 block w-full rounded-md py-1.5 text-gray-900 shadow-sm border-solid border border-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="px-2 py-3  flex w-full justify-center rounded-md bg-blue-color text-sm font-semibold leading-6 text-white shadow-sm hover:bg-btn-hover "
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
