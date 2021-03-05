import React from 'react';
import classes from './Hero.module.css';

const hero = (props) => {
    return (
        <section className={classes.Hero}
            id="hero">
            <div className={classes.overlay}></div>
            <div className={classes.intro}>
                <p className={classes.greeting}>H<span className={classes.greeting__sun}>i</span>,</p>
                <h1>I'm // Loretta //</h1>
            </div>
            <div className={classes.scroll__down}>
                <div className={classes.mouse__scroll}>
                    <span className={classes.mouse__wheel}>
                    </span>
                </div>
                <p className={classes.scroll__text}>Scroll</p>
            </div>
            <p className={classes.notice}>This website is still in development</p>
        </section>
    );
};

export default hero;