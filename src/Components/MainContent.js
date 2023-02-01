import React from "react";
import Email from "../Images/Mail.png";
import LinkedIn from "../Images/linkedin.png";
import "../style.css";

function MainContent() {
    return (
      <div className='card--details'>
        <h2 className="user--name">Laura Smith</h2>
        <p className="user--title">Frontend Developer</p>
        <p className="user--website">laurasmith.website</p>
        <div className="card-button">
          <div className="email-button">
            <img src={Email} />
            <p className="button--title">Email</p>
          </div>
          <div className="linkedin-button">
            <img src={LinkedIn} />
            <p className="button--title">LinkedIn</p>
          </div>
        </div>
        <h4 className="card--about">About</h4>
        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        <h4 className="card-interests">Interests</h4>
        <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        {/*<h1>Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>*/}
      </div>
    )
}

export default MainContent;
