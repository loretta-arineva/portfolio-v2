import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = (props) => (
    <nav className={classes.NavigationItems}>
        <NavigationItem link="/" active>Home</NavigationItem>
        <NavigationItem link="/">Projects</NavigationItem>
        <NavigationItem link="/">About</NavigationItem>
        <NavigationItem link="/">Contacts</NavigationItem>
    </nav>
);

export default navigationItems;