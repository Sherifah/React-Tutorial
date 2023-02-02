import React from "react";
import Twitter from "../Images/Twitter Icon.png";
import Facebook from "../Images/Facebook Icon.png";
import Instagram from "../Images/Instagram Icon.png";
import GitHub from "../Images/GitHub Icon.png";
import "../style.css";


function Footer() {
    return (
      <footer className="social-links">
        <img src={Twitter} alt="Twitter logo" />
        <img src={Facebook} alt="Facebook logo" />
        <img src={Instagram} alt="Instagram logo" />
        <img src={GitHub} alt="GitHub logo" />
      </footer>

)  
}

export default Footer;

//<small>© 2023 Sherifah development. All rights reserved</small>
