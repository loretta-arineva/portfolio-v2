import React from 'react';
import classes from './Copyright.module.css';

const Copyright = (props) => {
    return (
        <div className={classes.copyright}>
            <div className={classes.empty__Copyright}></div>
            <p>Copyright &copy; <span className={classes.current__year}>{props.currentYear}</span> Loreta Krasteva. All Rights Reserved</p>
        </div>
    );
};

export default Copyright;