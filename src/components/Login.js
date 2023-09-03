import React, { useEffect, useState } from 'react'
// import {lock,deny,no,noo,welcome} from "./assests"
import imgl from '../assets/13.png'
import Dashboard from './Dashboard';
import axios from "axios";
import Swal from 'sweetalert2'
import Navbar from './Navbar';

function Login() {
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
 
  const log1=(email,pwd,e)=>{
    e.preventDefault()
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.length===0 || pwd.length===0 || ! (email.match(validRegex))){
      Swal.fire(
        'Wrong',
        'empty ',
        'error'
      )
    }
    else{
      getUser(email,pwd,e)
    }
  }
  const[log,setlog]=useState(false)
  const getUser=(email,pwd,e)=>{
    e.preventDefault()
    axios.get(`http://localhost:8000/login/${email}/${pwd}`)
    .then((res)=>{
        console.log(res.data)
        if(res.data==="failed"){
          Swal.fire({
            title: res.data,
            text: "email wrong",
            imageUrl: 'img',
            imageWidth: 350,
            imageHeight: 400,
            imageAlt: 'Custom image',
          })
        }
        else{
          if(res.data==="Password Wrong"){
            Swal.fire({
              title: res.data,
              text: "Try Again",
              imageUrl: 'img',
              imageWidth: 350,
              imageHeight: 350,
              imageAlt: 'Custom image',
            })
          }
          else{
            Swal.fire({
              title: "welcome ",
              imageUrl: 'welcome',
              imageWidth: 350,
              imageHeight: 350,
              imageAlt: 'Custom image',
            })
            setlog(true)
          }
        }

      })
      .catch((error)=>{
        console.log(error)
      })
  }

  return (
    <div>
     <Navbar />
      { log ? <Dashboard/>:
      (<div className='container'>
      <div className='cont_login'>
      <div className='k'>
 
        </div>
        <div className='form_login '>
        <h1 className='h1 text-danger text-center'>Log In</h1><br></br><br></br>
        <div className='row'>
        <div className='col-lg-6 col-md-6 col-sm-12 text-center'>
            <img src={imgl} className='img-fluid'></img>
        </div>
<div className='col-lg-6 col-md-6 col-sm-12'>
<form className='f'>

  <div className="form-outline mb-4">
   <br></br>
    <label className="form-label text-light" htmlFor="form2Example1" >Email address</label>
    <input type="email" id="form2Example1" onChange={(e)=>setemail(e.target.value )} className="form-control" />
  </div>

  <div className="form-outline mb-4">
  <label className="form-label text-light" htmlFor="form2Example2" >Password</label>
    <input type="password" id="form2Example2" onChange={(e)=>setpassword(e.target.value )} className="form-control" />
    
  </div>
 
 
  <button  className="btn btn-danger btn-block mb-4" onClick={(e)=>log1(email,password,e)}>Log in</button>
</form>
</div>
        </div>

        </div>
      </div>
    </div>)}
   


    </div>
  )
}

export default Login
