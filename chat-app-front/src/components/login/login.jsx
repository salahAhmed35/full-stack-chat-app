import React , {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState('')
  const userData = {
    email,
    password
  }
  const navigate = useNavigate("")
  const handleSubmite = async (e) => {
    e.preventDefault()
    axios.post("http://127.0.0.1:5000/login", userData).then((response) => {
      if(response.status === 200){
        console.log(response.data);
        navigate("/chatRoom")
      }
    }).catch((error) => {
      if(error.response){
        if (error.response.status === 401) {
          console.log("Incorrect password");
        } else if (error.response.status === 404) {
          console.log("Non-existing email");
        }
      }
    })
  } 
  return (
    <div className="flex justify-center items-center h-full bg-gray-300">
      <div className="flex h-1/2 flex-col justify-center px-6 py-12 lg:px-8 bg-white w-1/3">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="submit" onSubmit={handleSubmite}>
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
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
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
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                login
              </button>
            </div>
          </form>

          <Link to="/register" className="mt-3 text-center text-sm text-gray-500 cursor-pointer">
            Don't have an account?{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login