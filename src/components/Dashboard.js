import React, { useEffect, useState } from 'react'
import axios from "axios";
import './dash.css'

import Swal from 'sweetalert2'

function Dashboard() {
    const [message,setmessage]=useState([])
  const MESSAGE=()=>{
    axios.get("http://localhost:8000/contact").
      then((res)=>{
        console.log(res.data)
        setmessage(res.data)
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  const deleteu=(id)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8000/contact/delete/${id}`).
        then((res)=>{
        console.log(res.data)})
      .catch((error)=>{
        console.log(error)});
        setmessage((prevUsers) => prevUsers.filter((user) => user._id !== id));
        Swal.fire(
          'Deleted!',
          'user has been deleted.',
          'success'
        )
      }
    })

  }
  useEffect(()=>{MESSAGE()},[])
  return (
    <>
    {
        message && message.length===0? <div className='container text-center'>
          <img className='img-fluid' src=""></img>
          <h1 className='text-center text-light pt-5'><span className='text-danger'>W</span>aiting...<span className='text-danger'>.</span></h1>
        </div> :
        (<div className='table-responsive ms-5'>
        <h1 className='mt-3 mb-2 text-warning-emphasis text-center text-danger'>contacts</h1>
            <table className="table bg-dark text-light table-hover  mt-2">
  <thead>
    <tr className='bg-danger'> 
      <th className='bg-danger' scope="col">N°</th>
      <th scope="col">Name</th>
      <th className='bg-danger' scope="col">Email</th>
      <th scope="col">message</th>
      <th className='bg-danger'>delete</th>
    </tr>
  </thead>
  <tbody>
    {
        message && message.map((item,index)=>(
            <tr  key={index}>
              <td>{index+1}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.message}</td>
      <td><button className='btn btn-danger w-30' onClick={()=>deleteu(item._id)}>X</button></td>
    </tr>
        ))
    }
  </tbody>
</table></div>
        )
    }
    </>
  )
}

export default Dashboard
