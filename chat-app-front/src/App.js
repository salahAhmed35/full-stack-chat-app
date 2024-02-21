import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Register from "./components/register/register";
import ChatRoom from "./components/chatRoom/chatRoom";
import { useAuth } from "./contexts/userDataContext";
function App() {
  const { userData } = useAuth();
  return (
    <div className="App h-lvh">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {userData ? (
            <Route path="/chatRoom" element={<ChatRoom />} />
          ) : (
            <Route path="/login" element={<Login />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
