import logo from './logo.svg';
import './App.css';
import Home from './home'
import Login from './login'
import Register from './register'
import List from './userlist'

import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/user-list" element={<List/>} />
        </Routes>
    </>
  );
}

export default App;
