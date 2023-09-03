import React from 'react'
import './workcard.css'
import face from "../assets/face.png" ;
import git from "../assets/git1.png"
import insta from "../assets/insta.png" 
import linked from "../assets/Linked.png"
import { Link } from 'react-router-dom';
function WorkCard() {
  return (
    <section id="clients" className="clients">
    <div className="container">
      <div className="row d-flex justify-content-between">
        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
        <Link to="https://www.facebook.com/kalil.bouzidi?mibextid=2JQ9oc" target="_blank" rel="noreferrer" >
          <img src={face} className="img-fluid " alt /> </Link>
        </div>
        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
        <Link to="https://github.com/khalil360" target="_blank" rel="noreferrer" >
          <img src={git} className="img-fluid" alt /></Link>
        </div>
        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
        <Link to="https://instagram.com/khalilo360?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" rel="noreferrer" >
          <img src={insta} className="img-fluid" alt /></Link>
        </div>
        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
        <Link to="https://www.linkedin.com/in/khalil-bouzidi-6750a0278/" target="_blank" rel="noreferrer" >
          <img src={linked} className="img-fluid" alt /></Link>
        </div>
       
      </div>
    </div>
  </section>
  
  )
}

export default WorkCard
