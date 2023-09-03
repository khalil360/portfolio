import React, { useEffect, useState } from 'react'
import cona from '../assets/cona.png'
import axios from "axios";
import Swal from 'sweetalert2'
import './contact.css'

function Contact1() {
  const [email,setemail]=useState('');
    const [name,setName]=useState('');
    const [message,setmessage]=useState('');

    const sendb=(e)=>{
      e.preventDefault()
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(name.length<3 ||message.length<5 || email.length<0 || ! (email.match(validRegex)) ){
        Swal.fire({
          icon: 'error',
          title: 'Wrong',
          text: 'check Inputs',
        })
      }
    else{
      add(e)
    }
    }

  const add=(e)=>{
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Send It!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post("http://localhost:8000/contact/add",{
        "name":name,
        "email":email,
        "message":message
        }).
        then((res)=>{
    console.log(res.data);
    Swal.fire({
        title: 'perfect',
        text: "thank you for JOB!",
        icon: 'success',
        
      }) })
      .catch((error)=>{console.log(error)})
      }
    })
    ;

  document.getElementById('form').reset(); 
}
  return (
    <div>
      <div className='container contact p-5' id='contact'>
        <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
                <h1 className='text-danger'>contact us</h1><br></br>
                <form className="row g-3" id='form'>
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label text-light">Name</label>
    <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)}  id="inputEmail4" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label  text-light">Email</label>
    <input type="Email" className="form-control" onChange={(e)=>setemail(e.target.value)}  id="inputPassword4" />
  </div>
  <div className="col-12">
  <label htmlFor="inputZip" className="form-label text-light">message</label>
  <textarea className="form-control" aria-label="With textarea" onChange={(e)=>setmessage(e.target.value)} ></textarea>
  </div>
  <div className="col-12 text-center">
    <button onClick={(e)=>{sendb(e)}} className="bt btn btn-danger">Send</button>
  </div>
  </form>
            </div>
            <img src={cona} className='img-fluid col-lg-6 col-md-6 col-sm-12 mt-3 '></img>
        </div>
      </div>
    </div>
  )
}

export default Contact1
