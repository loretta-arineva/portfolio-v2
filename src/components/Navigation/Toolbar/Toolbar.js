import React from 'react';

import classes from './Toolbar.module.css';
import Hamburger from '../SideDrawer/Hamburger/Hamburger';
import Logo from '../../Logo/Logo';

// import Logo from '../../Logo/Logo';
// import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
       <Hamburger clicked={props.clicked}/>
       <Logo />
    </header>
);

export default toolbar;