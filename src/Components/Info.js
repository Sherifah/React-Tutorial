import React from "react";
import picture from '../Images/Rectangle 90.png'
import Email from "../Images/Mail.png";
import LinkedIn from "../Images/linkedin.png";
import "../style.css";

function Info() {
    return(
        <div className="user--info">
            <img src={picture} className="card-name" alt="woman" />
            <h2 className="user--name">Laura Smith</h2>
            <p className="user--title">Frontend Developer</p>
            <p className="user--website">laurasmith.website</p>
            <div className="card--button">
                <div className="email--button">
                    <img src={Email} />
                    <p className="button--title">Email</p>
                </div>
                <div className="linkedin--button">
                    <img src={LinkedIn} />
                    <p className="button--title">LinkedIn</p>
                </div>
            </div>
        </div>
    )
}

export default Info;
