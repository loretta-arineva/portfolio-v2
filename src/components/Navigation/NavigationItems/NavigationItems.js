import React from 'react';

// import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = (props) => (
    <nav>
        <NavigationItem clicked={props.clicked} link="/" active>Home</NavigationItem>
        <NavigationItem clicked={props.clicked} link="#about">About</NavigationItem>
        <NavigationItem clicked={props.clicked} link="#projects">Projects</NavigationItem>
        <NavigationItem clicked={props.clicked} link="#contacts">Contacts</NavigationItem>
    </nav>
);

export default navigationItems;