import React from 'react';
import'./skills.css' ;
import { BsFillPatchCheckFill,BsFiletypeCss ,BsFillBootstrapFill} from 'react-icons/bs';
import { AiFillHtml5,AiFillGithub } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact,FaNodeJs,BiLogoMongodb} from "react-icons/fa";
function Skills() {


  return (
    <section id="experience">
        <div className='container text-center'>
    <h2 className='text-danger'>Skills</h2>
      <h5 className='text-secondary'>The Skills I Have</h5><br></br>
      </div>
    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Front-end Development</h3>
        <div className="experience__content">
        <article className="experience__details">
            <AiFillHtml5 className="experience__details-icon" />
            <h4>HTML</h4>
          </article>
          <article className="experience__details">
            <BsFiletypeCss className="experience__details-icon" />
            <h4>CSS</h4>
          </article>
          <article className="experience__details">
            <IoLogoJavascript className="experience__details-icon" />
            <h4>JavaScript</h4>
          </article>
          <article className="experience__details">
            <FaReact className="experience__details-icon" />
            <h4>React</h4>
          </article>
          <article className="experience__details">
            <BsFillBootstrapFill className="experience__details-icon" />
            <h4>Bootstrap</h4>
          </article>
          
          
        </div>
      </div>
      <div className="experience__backend">
        <h3>Back-end Development</h3>
        <div className="experience__content">
        <article className="experience__details">
            <FaNodeJs className="experience__details-icon" />
            <h4>Node Js</h4>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <h4>Express Js</h4>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <h4>MongoDb</h4>
          </article>
         
          <article className="experience__details">
            <AiFillGithub className="experience__details-icon" />
            <h4>Git/GitHub</h4>
          </article>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Skills
