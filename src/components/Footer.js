import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitterSquare} from '@fortawesome/free-brands-svg-icons'
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
import {faInstagramSquare} from '@fortawesome/free-brands-svg-icons'
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons'


export default function About(){
    return (
        <div className="main--footer">
            <div className="footer--soMe">
            <a href="#" className="footer--twitter"><FontAwesomeIcon icon={faTwitterSquare} /></a>
            <a href="#" className="footer--twitter"><FontAwesomeIcon icon={faFacebookSquare} /></a>
            <a href="#" className="footer--twitter"><FontAwesomeIcon icon={faInstagramSquare} /></a>
            <a href="#" className="footer--twitter"><FontAwesomeIcon icon={faGithubSquare} /></a>
            </div>
        </div>
    )
}
