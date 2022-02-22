import React from "react";
import myself from "../images/sara.jpg"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'



export default function Info(){
    return (
        <div className="main--info">
            <img
            src={myself}
            alt="Me, the creator"
            className="info--picture"
            />

            <h1 className="info--name">Sara Andreasen</h1>
           <h4 className="info--details">Frontend Developer in-training</h4> 
            <h5 className="info--portfolio">https://sarasandreasen.dk/ny-portfolio/</h5>
        <div className="btn--div">
            <a href="#" className="info--email"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>  Email</a>
            <a href="#" className="info--linkedin"><FontAwesomeIcon icon={faLinkedin} />  LinkedIn</a>
        </div>
            
        </div>
    )
}