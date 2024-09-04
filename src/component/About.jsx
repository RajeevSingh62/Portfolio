import React from "react";
import profile from "../assets/profile.jpeg";
const About = () => {
  return (
    <div className="aboutmain">
      <div class="profile">
        <div className="s">
          <div className="imag">
            {" "}
            <img src={profile} alt="Profile Picture" />
          </div>
          <div className="name">
            <h2>Name: Rajeev Singh</h2><br />
            <p><span style={{fontWeight:"800"}}>Profile</span>: Full Stack Developer</p> <br />
            <p><span style={{fontWeight:"800"}}>Email</span>: Rajeevsingh629944@gmail.com</p><br />
            <p><span style={{fontWeight:"800"}}>Profile</span>: 6299443754</p>
          </div>
        </div>

        <div class="skills">
          <h3 style={{fontSize:"25px"}}>Skills</h3>
          <br />
          <div>
  <p>HTML 85%</p>
  <div class="skill-bar">
    <div class="skill-level html"></div>
  </div>
</div>
<div>
  <p>CSS3 75%</p>
  <div class="skill-bar">
    <div class="skill-level css"></div>
  </div>
</div>

<div>
  <p>JavaScript 80%</p>
  <div class="skill-bar">
    <div class="skill-level js"></div>
  </div>
</div>
<div>
  <p>React.js 90%</p>
  <div class="skill-bar">
    <div class="skill-level react"></div>
  </div>
</div>
<div>
  <p>Node.js 90%</p>
  <div class="skill-bar">
    <div class="skill-level node"></div>
  </div>
</div>
<div>
  <p>Express.js 90%</p>
  <div class="skill-bar">
    <div class="skill-level express"></div>
  </div>
</div>
<div>
  <p>MongoDB 90%</p>
  <div class="skill-bar">
    <div class="skill-level mongodb"></div>
  </div>
</div>
<div>
  <p>Core Java 90%</p>
  <div class="skill-bar">
    <div class="skill-level java"></div>
  </div>
</div>
<div>
  <p>C Language 80%</p>
  <div class="skill-bar">
    <div class="skill-level c-language"></div>
  </div>
</div>

        </div>
      </div>

      <div class="about">
        <h2 style={{textAlign:"center", marginBottom:"15px", fontSize:"35px"}}>About Me</h2> 
        <hr  style={{width:"50%", margin:"0 auto"}}/>
        <br />
        
        <strong style={{fontSize:"22px", fontFamily:"Helvetica Neue', Arial, sans-serif"}}>
          As a motivated and passionate MERN Fullstack Developer, I specialize
          in creating dynamic web applications using MongoDB, Express.js, React,
          and Node.js. I thrive on solving complex problems
          and continuously improving my knowledge to stay current with industry
          trends. 
        
        
        With a strong foundation in both front-end and back-end
          development, I am eager to apply my skills to real-world projects and
          contribute to innovative teams.
        
        
        My goal is to build efficient, scalable, and user-friendly
        applications that make a positive impact.
        </strong>
      </div>
    </div>
  );
};

export default About;
