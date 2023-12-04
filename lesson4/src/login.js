import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import DataMgr from './DataMgr';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
  	return () => {
  		DataMgr.loadData()
  	};
  }, [])

  function doLogin(e) {
  	let isLogin = false
  	for(let user of DataMgr.userList) {
  		if(user.email == email && user.password == password) {
  			//Login success
  			isLogin = true
  			navigate('/user-list')
  		}
  	}
  	if(!isLogin) {
		//login fail
  		alert('Login failed')
  	}
  }
  return (
    <div className="card">
        <div className="container">
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
            <button className="btn btn-success" onClick={doLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;