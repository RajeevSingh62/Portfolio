import React from "react";
import p from "../assets/p.png";
import RajeevResume from "../assets/RajeevResume.pdf";

const Home = () => {

  return (
    <div>
      <section className="section">
        <div className="firstsection">
           Hi, my name is <span className="purple">Rajeev Singh</span>. I'm a passionate MERN
          stack developer with a strong foundation in building dynamic and
          responsive web applications. I specialize in leveraging MongoDB,
          Express.js, React, and Node.js to create seamless user experiences and
          robust back-end solutions. With a keen eye for detail and a commitment
          to continuous learning, I strive to stay updated with the latest
          technologies and best practices in the industry.
          <br />
          <br />
          <a href={RajeevResume} download className="btn">Download Resume</a>
         <a href='https://github.com/RajeevSingh62' className="btn">Github</a>
        </div>
        <div className="secondsection">
          <img src={p} alt="pic" />
        </div>
      </section>
    </div>
  );
};

export default Home;
