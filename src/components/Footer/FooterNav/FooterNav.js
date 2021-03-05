import React from 'react';
import classes from './FooterNav.module.css';

const FooterNav = (props) => {
    return (
        <div className={classes.site__links}>
            <nav className={classes.footer__nav}>
                <ul>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contacts">Contacts</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default FooterNav;