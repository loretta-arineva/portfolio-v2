import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import classes from './Footer.module.css';
const footer = (props) => {
    return (
        <footer className={classes.Footer}>
            <div className={classes.site__links}>
                <h3>Navigation</h3>
                <nav className={classes.footer__nav}>
                    <ul>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contacts">Contacts</a></li>
                    </ul>
                </nav>
            </div>
            <div className={classes.social}>
                <ul>
                    {/* <li><a href=""><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faFacebookF} /></a></li>
                    <li><a href="mailto:loretta.arineva@gmail.com"><FontAwesomeIcon icon={faGooglePlusG} /></a></li> */}
                </ul>
            </div>
            {/* <Copyright currentYear={props.currentYear}/> */}
        </footer>
    );
};

export default footer;