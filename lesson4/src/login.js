import logo from './logo.svg';
import './App.css';

function login() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          Login
        </div>
        <div className="card-body">
          <div className="form-group">
            <label>Email: </label>
            <input type="text" name="fullname" placeholder="Enter email" className="form-control"/>
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input type="password" name="pwd" placeholder="Enter password" className="form-control"/>
          </div>
          <div className="form-group">
            <button className="btn btn-success"><a href="/list">Login</a></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;