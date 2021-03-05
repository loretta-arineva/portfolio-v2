import React from 'react';

import classes from './CloseButton.module.css';

const sideDrawer = (props) => (
    <div className= {classes.CloseButton} onClick={props.close}>
        <div className={[classes.close, classes[props.place]].join(' ')} clicked={props.clicked}>
        </div>
    </div>
);

export default sideDrawer;

