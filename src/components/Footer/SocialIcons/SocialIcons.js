import React from 'react';
import classes from './SocialIcons.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = (props) => {
    return (
        <div className={classes.social}>
            <ul>
                <li><a href=""><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a href=""><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                <li><a href=""><FontAwesomeIcon icon={faFacebookF} /></a></li>
                <li><a href="mailto:loretta.arineva@gmail.com"><FontAwesomeIcon icon={faGooglePlusG} /></a></li>
            </ul>
        </div>
    );
};

export default SocialIcons;