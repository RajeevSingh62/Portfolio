import React, { useState } from "react";
import todo from "../assets/todo.png";
import addProduct from "../assets/addProduct.png";
import bmi from "../assets/bmi.jpeg";

import darpan from "../assets/darpan.png";

const Projects = () => {
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", marginTop: "45px", fontSize:"50px" }}>
          Some of my recent projects
        </h1>
        <br />
        <br />
        <hr  style={{width:"50%", marginLeft:"440px"}}/>
        <br /><br />
        <div style={{ 
  textAlign: "center", 
  width: "60%", 
  margin: "0 auto", 
  padding: "20px", 
  backgroundColor: "#f9f9f9", 
  borderRadius: "10px", 
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
 
}}>
  <p style={{ 
    fontSize: "18px", 
    lineHeight: "1.6", 
    color: "#333", 
    fontFamily: "'Helvetica Neue', Arial, sans-serif" 
  }}>
    Below you can see some examples of my recent work. I’ve had the pleasure of 
    working on a variety of projects, from web development to full-stack applications. 
    Each project showcases my ability to create functional, user-friendly designs with clean code. 
    Feel free to explore and check out my complete portfolio for a deeper dive into my skills and the work I’m passionate about.
  </p>
</div>


        <div className="mainBox">
          <div className="card">
            <img src={todo} className="cardImg1" alt="Card image" />
            <div className="card-body">
              <h5 className="card-title">React-Todo-App </h5>

              <p className="card-text">
                With the help this App we can add ,view <br /> ,delete and edit
                todo tasks.
              </p>
              <a
                href="https://github.com/RajeevSingh62/React-Todo-App"
                className="btn"
              >
                view project
              </a>
            </div>
          </div>
          <div className="card">
            <img src={darpan} className="cardImg2" alt="Card image" />
            <div className="card-body">
              <h5 className="card-title">Darpan Ngo</h5>

              <p className="card-text">
                developed ui of darpan ngo using
                <br />
                html ,css ,bootstrap and javascript
              </p>
              <a href="#" className="btn">
                view project
              </a>
            </div>
          </div>
          <div className="card">
            <img src={bmi} className="cardImg3" alt="Card image" />
            <div className="card-body">
              <h5 className="card-title">React BMI Calculator</h5>

              <p className="card-text">
                Bmi calculator built using React js <br />
                and some basics React Hooks and bootstrap for ui.
              </p>
              <a href="#" className="btn">
                view project
              </a>
            </div>
          </div>
          <div className="card">
            <img src={addProduct} className="cardImg4" alt="Card image" />
            <div className="card-body">
              <h5 className="card-title">Ecom-Dashboard</h5>

              <p className="card-text">
                Ecommerce dashboard developed using <br />
                Frontend :-React js and for <br /> backend:-Nodejs and mongoDB
              </p>
              <a href="#" className="btn">
                view project
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
