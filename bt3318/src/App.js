import logo from './logo.svg';
import './App.css';
import Register from './pages/register'
import Info from './pages/info'
import {
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/info" element={<Info/>}/>
      </Routes>
    </>
  );
}

export default App;
