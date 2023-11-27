import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    console.log('invoke app')

  // console.log('init data')
  // let stdList = []
  // for (var i = 0; i < 10; i++) {
  //   stdList.push({
  //     "fullname": "TRAN VAN " + i,
  //     "age": 20 + i,
  //     "address": "Ha Noi",
  //     "email": "tranvan"+i+"@gmail.com"
  //   })
  // }
  // const [studentList, setStudentList] = useState(stdList)
  // const [studentList, setStudentList] = useState([...stdList])
  const [studentList, setStudentList] = useState([])

  useEffect(() => {
    return () => {
      console.log('init data')
      let stdList = []
      for (var i = 0; i < 10; i++) {
        stdList.push({
          "fullname": "TRAN VAN " + i,
          "age": 20 + i,
          "address": "Ha Noi",
          "email": "tranvan"+i+"@gmail.com"
        })
      }

      setStudentList([...stdList])
    };
  }, [])

  useEffect(() => {
    return () => {
      console.log('testing ...')
    };
  }, [studentList])

  function removeStudent(index) {
    console.log("index > " + index)
    //1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    studentList.splice(index, 1) //index = 2 => xoa phan tu 3 di -> 1, 2, 4, 5, 6, 7, 8, 9, 10
    console.log(studentList)
    setStudentList([...studentList])
  }

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-heading bg-info">
            Student Management
          </div>
          <div className="card-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Full Name</th>
                  <th>Age</th>
                  <th>Address</th>
                  <th>Email</th>
                  <th style={{"width":"160px"}}></th>
                </tr>
              </thead>
              <tbody>
                {studentList.map((std, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{std.fullname}</td>
                    <td>{std.age}</td>
                    <td>{std.address}</td>
                    <td>{std.email}</td>
                    <td>
                      <button className="btn btn-warning">Edit</button>
                      <button className="btn btn-danger" style={{"margin-left": "5px"}} onClick={()=>removeStudent(index)}>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
