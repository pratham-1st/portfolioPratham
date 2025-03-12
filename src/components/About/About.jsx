import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img (2).jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I have hands-on experience in building and deploying web applications. I can contribute effectively to both frontend and backend development. </p>
                <p>I have worked on multiple real-world projects that required problem-solving.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>ReactJS, MongoDB</p><hr style={{width:"55%"}} className="hr1"/></div>
                <div className="about-skill"><p>ExpressJS, NodeJS</p><hr style={{width:"60%"}} className="hr2"/></div>
                <div className="about-skill"><p>ML & AI</p><hr style={{width:"50%"}} className="hr3"/></div>
                <div className="about-skill"><p>C++, JAVASCRIPT</p><hr style={{width:"60%"}} className="hr4"/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>3+</h1>
            <p>Experience in software development</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>Qualified</h1>
            <p>GATE 2024 CS/IT exam conducted by IISC Bangalore</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>TOP 20</h1>
            <p>Ranker in Nagpur University [BTech in Computer Engineering]</p>
        </div>
      </div>
    </div>
  );
};

export default About;
