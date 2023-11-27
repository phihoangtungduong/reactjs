import React, { useState } from 'react';

import logo from './logo.svg';

import './App.css';

import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';



function App() {

  let title = "QUAN LY THONG TIN SINH VIEN"

  

  const [title2, setTitle2] = useState("QUAN LY THONG TIN SINH VIEN")

  const [count, setCount] = useState(0)

  const [student, setStudent] = useState({

   "fullname": "TRAN VAN A",

   "email": "tranvana@gmail.com",

   "phoneNumber": "0967025996"

  })



  function updateMore(e) {

   console.log('xin chao')

   setCount(count + 1)

   setTitle2('ABC')

   title = "OKOK"

  }



  return (

    <>

     <nav class="navbar navbar-expand-sm navbar-dark bg-dark">

   <div class="container">

     <a class="navbar-brand" href="javascript:void(0)">

      <img src="https://gokisoft.com/styles/theme20/images/logo/logo.jpg" style={{"height": "35px"}}/>

     </a>

     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">

       <span class="navbar-toggler-icon"></span>

     </button>

     <div class="collapse navbar-collapse" id="mynavbar">

       <ul class="navbar-nav me-auto">

         <li class="nav-item">

           <a class="nav-link" href="javascript:void(0)">Trang Chu</a>

         </li>

         <li class="nav-item">

           <a class="nav-link" href="javascript:void(0)">DS Khoa Hoc</a>

         </li>

         <li class="nav-item">

           <a class="nav-link text-test" href="javascript:void(0)">Goc Lap Trinh</a>

         </li>

       </ul>

       <form class="d-flex">

         <ul class="navbar-nav me-auto">

         <li class="nav-item">

           <a class="nav-link" href="javascript:void(0)"><i class="bi bi-person-fill"></i> Dang Ky</a>

         </li>

         <li class="nav-item">

           <a class="nav-link" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#myLogin"><i class="bi bi-box-arrow-right"></i> Dang Nhap</a>

         </li>

     </ul>

       </form>

     </div>

   </div>

 </nav>



 <div class="container mt-2 mb-5">

 <div class="card">

 <div class="card-header bg-info text-white">

 {title} - {title2} - {count}

 <button onClick={updateMore} className="btn btn-warning">Update More</button>

 </div>

    <div class="card-body table-responsive">

    <table class="table table-bordered table-hover">

    <thead>

    <tr>

    <th>STT</th>

    <th>Ho & Ten</th>

    <th>Email</th>

    <th>SDT</th>

    <th style={{"width": "160px"}}></th>

    </tr>

    </thead>

    <tbody>

    <tr>

    <td>01</td>

    <td>TRAN VAN A</td>

    <td>tranvana@gmail.com</td>

    <td>123213123</td>

    <td>

    <button class="btn btn-warning">Edit</button>

    <button class="btn btn-danger">Remove</button>

    </td>

    </tr>

    <tr>

    <td>01</td>

    <td>TRAN VAN A</td>

    <td>tranvana@gmail.com</td>

    <td>123213123</td>

    <td>

    <button class="btn btn-warning">Edit</button>

    <button class="btn btn-danger">Remove</button>

    </td>

    </tr>

    <tr>

    <td>01</td>

    <td>TRAN VAN A</td>

    <td>tranvana@gmail.com</td>

    <td>123213123</td>

    <td>

    <button class="btn btn-warning">Edit</button>

    <button class="btn btn-danger">Remove</button>

    </td>

    </tr>

    <tr>

    <td>01</td>

    <td>TRAN VAN A</td>

    <td>tranvana@gmail.com</td>

    <td>123213123</td>

    <td>

    <button class="btn btn-warning">Edit</button>

    <button class="btn btn-danger">Remove</button>

    </td>

    </tr>

    <tr>

    <td>01</td>

    <td>TRAN VAN A</td>

    <td>tranvana@gmail.com</td>

    <td>123213123</td>

    <td>

    <button class="btn btn-warning">Edit</button>

    <button class="btn btn-danger">Remove</button>

    </td>

    </tr>

    <tr>

    <td>01</td>

    <td>TRAN VAN A</td>

    <td>tranvana@gmail.com</td>

    <td>123213123</td>

    <td>

    <button class="btn btn-warning">Edit</button>

    <button class="btn btn-danger">Remove</button>

    </td>

    </tr>

    <tr>

    <td>01</td>

    <td>TRAN VAN A</td>

    <td>tranvana@gmail.com</td>

    <td>123213123</td>

    <td>

    <button class="btn btn-warning">Edit</button>

    <button class="btn btn-danger">Remove</button>

    </td>

    </tr>

    <tr>

    <td>01</td>

    <td>{student.fullname}</td>

    <td>{student.email}</td>

    <td>{student.phoneNumber}</td>

    <td>

    <button class="btn btn-warning">Edit</button>

    <button class="btn btn-danger">Remove</button>

    </td>

    </tr>

    </tbody>

    </table>

    <ul class="pagination">

   <li class="page-item"><a class="page-link" href="#">&lt;</a></li>

   <li class="page-item"><a class="page-link" href="#">1</a></li>

   <li class="page-item active"><a class="page-link" href="#">2</a></li>

   <li class="page-item"><a class="page-link" href="#">3</a></li>

   <li class="page-item"><a class="page-link" href="#">&gt;</a></li>

 </ul>

    </div>

 </div>

 </div>

    </>

  );

}



export default App;