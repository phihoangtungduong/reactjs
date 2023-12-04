import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import DataMgr from './DataMgr';

function Register() {
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    return () => {
        DataMgr.loadData()
    }
  }, [])
  
function addUser() {
  let user = {
    "fullname": fullname,
    "email": email,
    "address": address,
    "phoneNumber": phoneNumber,
    "password": password
  }
  DataMgr.addUser(user)
}

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          Register
        </div>
        <div className="card-body">
          <div className="form-group">
            <label>FullName: </label>
            <input type="text" name="fullname" placeholder="Enter fullname" className="form-control" value={fullname} onChange={(e) => setFullname(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Phone Number: </label>
            <input type="tel" name="phonenumber" placeholder="Enter Phone Number" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Address: </label>
            <input type="text" name="address" placeholder="Enter Address" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input type="email" name="email" placeholder="Enter email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input type="password" name="pwd" placeholder="Enter password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="form-group">
            <button className="btn btn-success" onClick={addUser}>Register</button>
            <p>
              <a href="/login">Back Login page</a>
            </p>
            <p>
								<a href="user-list">Open User List</a>
						</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;