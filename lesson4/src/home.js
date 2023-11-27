import logo from './logo.svg';
import './App.css';

function home() {
  return (
    <div className="App">
      <button className='btn btn-success'><a  style={{'color':'white'}} href='login'>Login</a></button>
      <button className='btn btn-lg' style={{"backgroundColor":"red"}}><a  style={{'color':'white'}} href='register'>Register</a></button>
    </div>
  );
}

export default home;