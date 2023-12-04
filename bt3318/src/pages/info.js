import logo from '../logo.svg';
import '../App.css';
import React, { useState, useEffect } from 'react';
import DataMgr from './DaraMgr';

function Info() {
  const [userList, setUserList] = useState([])
  useEffect(() => {
  	return () => {
  		DataMgr.loadData()
  		setUserList([...DataMgr.userList])
  	};
  }, [])
  return (
    <>
      <div className='container'>
            <div className='row'>
                <div className='card'>
                    <div className='card-body'>
                        <h2>User List</h2>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Full Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userList.map((user, index) => (
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{user.fullname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phoneNumber}</td>
                                        <td>{user.address}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>

                    </div>

                </div> 
            </div>
        </div>
    </>
  );
}

export default Info;