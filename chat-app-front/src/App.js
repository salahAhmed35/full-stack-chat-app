import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./components/login/login"
import Register from "./components/register/register";
import ChatRoom from './components/chatRoom/chatRoom';
function App() {
  return (
    <div className="App h-lvh">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/chatRoom' element={<ChatRoom/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
