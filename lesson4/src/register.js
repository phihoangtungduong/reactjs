import logo from './logo.svg';
import './App.css';

function register() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          Register
        </div>
        <div className="card-body">
          <div className="form-group">
            <label>FullName: </label>
            <input type="text" name="fullname" placeholder="Enter fullname" className="form-control"/>
          </div>
          <div className="form-group">
            <label>Phone: </label>
            <input type="text" name="fullname" placeholder="Enter your Phone" className="form-control"/>
          </div>
          <div className="form-group">
            <label>Address: </label>
            <input type="text" name="fullname" placeholder="Enter Address" className="form-control"/>
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input type="text" name="fullname" placeholder="Enter email" className="form-control"/>
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input type="password" name="pwd" placeholder="Enter password" className="form-control"/>
          </div>
          <div className="form-group">
            <button className="btn btn-success">Register</button>
            <p>
              <a href="/login">Back Login page</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default register;