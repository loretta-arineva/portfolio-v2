import React from 'react';

import classes from './Logo.module.css';

const logo = (props) => {
    const logClass = props.logoClass ? classes.logoClassDrawer : '';
    return <div className={[classes.Logo, logClass].join(' ')}>
        <p className={props.logoClass ? classes.logoClassDrawer : null}>.Loretta</p>
    </div>
};

export default logo;