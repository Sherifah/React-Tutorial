import React from "react";
import picture from "../Images/image 12.png"
import star from "../Images/Star.png"

function Card() {
    return (
        <div className="card">
            <img src={picture} className="card--image" alt="trainer picture" />
            <div className="card--stats">
                <img src={star} alt="rating" className="card--star" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}

export default Card;
