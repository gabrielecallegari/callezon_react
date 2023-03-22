import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './Footer.css'

export default function Footer(){
    return(
        <div className="footer">
            <label className="footer--label">© <a href="https://github.com/gabrielecallegari" className="footer--a">Gabriele Callegari</a></label>
            <div className="footer--social">
                <a href="https://github.com/gabrielecallegari" className="footer--git">
                    <FontAwesomeIcon icon={faGithub} className="footer--icon"/>
                </a>

                <a href="mailto:g.callegari@itsrizzoli.it" className="footer--git">
                    <FontAwesomeIcon icon={faEnvelope} className="footer--icon"/>
                </a>

                <a href="tel:+393420336780" className="footer--git">
                    <FontAwesomeIcon icon={faPhone} className="footer--icon"/>
                </a>
            </div>
        </div>
    )
}