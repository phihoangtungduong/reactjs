import logo from '../logo.svg';
import '../App.css';
import React, { useState, useEffect } from 'react';
import DataMgr from './DaraMgr';

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
    <>
      <div className="container">
		<div className="row">
			<div className="col-md-3"></div>
			<div className="col-md-6">
				<div className="card" style={{"margin-top": "30px"}}>
					<div className="card-body">
						<h2 className="text-center">Register</h2>
						<div className="form-group">
							<label>Full Name: </label>
							<input type="text" name="fullname" className="form-control" placeHolder="Enter fullname" value={fullname} onChange={(e) => setFullname(e.target.value)}/>
						</div>
						<div className="form-group">
							<label>Email: </label>
							<input type="email" name="email" className="form-control" placeHolder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
						</div>
						<div className="form-group">
							<label>Address: </label>
							<input type="text" name="address" className="form-control" placeHolder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)}/>
						</div>
						<div className="form-group">
							<label>Phone Number: </label>
							<input type="tel" name="phone_number" className="form-control" placeHolder="Enter phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
						</div>
						<div className="form-group">
							<label>Password: </label>
							<input type="password" name="pwd" className="form-control" placeHolder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>
						</div>
						<div className="form-group">
							<button className="btn btn-success" onClick={addUser}>Register</button>
                            <p>
								<a href="info">Open User List</a>
						    </p>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-3"></div>
		</div>
	</div>
    </>
  );
}

export default Register;