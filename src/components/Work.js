import React from 'react'
import './Work.css'
import WorkCard from './WorkCard'
import khalil from '../assets/khalil port2.png'
import { Link } from 'react-router-dom'
import resume from '../assets/khalil.pdf'


function Work() {
  return (
    <div>
       <section id="work" className="d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center pt-5 pt-lg-0 ">
          <h1>Hello ,I'm <span className='text-danger'>khalil</span></h1>
          <h2>a Full-Stack Developer in reactjs and node js</h2>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <Link to={resume} download="khalil-resume" target="_blank" rel="noreferrer" id='resume' className="btn-get-started scrollto ">resume</Link>
          </div>
        </div>
        <div className="col-lg-6  work-img">
          <img src={khalil} className="img-fluid animated" alt /><WorkCard />
        </div>
      </div>
      
    </div>
    
  </section>
  
    </div>
    
  )
}

export default Work
