import React from 'react';

import guessTheNumber from '../../assets/img/Projects/Project-Guess-The-Number.png';
import dicePigGame from '../../assets/img/Projects/Project-Dice-Pig-Game.png';
import pricingPanel from '../../assets/img/Projects/Project-Pricing-Panel.png';
import gothamBlog from '../../assets/img/Projects/Project-Gotham-Blog.png';
import html from '../../assets/img/stack/html.svg';
import css from '../../assets/img/stack/css.svg';
import javascript from '../../assets/img/stack/javascript.svg';
import npm from '../../assets/img/stack/npm.svg';
import parcel from '../../assets/img/stack/parcel.jpg';
import sass from '../../assets/img/future-stack/sass.svg';
import react from '../../assets/img/future-stack/react.svg';
import nodejs from '../../assets/img/future-stack/node-js.svg';
import mongodb from '../../assets/img/future-stack/mongodb.svg';
import electron from '../../assets/img/future-stack/electronJS.svg';
import './Projects.css';
class Projects extends React.Component {
    render() {
        return (
            <section className="programming project__div-container" id="projects">
                <div className="section__intro">
                    <h2 className="section__heading">Projects</h2>
                    <p className="section__description">See some of my work</p>
                </div>
                <div className="projects description">
                    <h3>Projects</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <div className="project__grid">
                        <div className="project">
                            <div className="project__image__container">
                                <img src={guessTheNumber} className="project__image"/>
                                <div className="project__stack__container">
                                    <div className="project__stack">HTML5</div>
                                    <div className="project__stack">CSS3</div>
                                    <div className="project__stack">Vanilla JavaScript ES6</div>
                                </div>
                            </div>
                            <div className="project__description">
                                <p className="project__name">Guess The Number</p>
                            </div>
                        </div>
                        <div className="project">
                            <div className="project__image__container">
                                <img src={dicePigGame} className="project__image"/>
                                <div className="project__stack__container">
                                    <span className="project__stack">HTML5</span>
                                    <span className="project__stack">CSS3</span>
                                    <span className="project__stack">MVC</span>
                                    <span className="project__stack">Vanilla JavaScript ES6</span>
                                </div>
                            </div>
                            <div className="project__description">
                                <p className="project__name">Dice Pig Game</p>
                            </div>
                        </div>
                        <div className="project">
                            <div className="project__image__container">
                                <img src={pricingPanel} className="project__image"/>
                                <div className="project__stack__container">
                                    <span className="project__stack">HTML5</span>
                                    <span className="project__stack">CSS3</span>
                                    <span className="project__stack">Vanilla JavaScript ES6</span>
                                    <span className="project__stack">Built from a Photoshop Mockup</span>
                                </div>
                            </div>
                            <div className="project__description">
                                <p className="project__name">Guess The Number</p>
                            </div>
                        </div>
                        <div className="project">
                            <div className="project__image__container">
                                <img src={gothamBlog} className="project__image"/>
                                <div className="project__stack__container">
                                    <span className="project__stack">HTML5</span>
                                    <span className="project__stack">CSS3</span>
                                    <span className="project__stack">Built from a Photoshop Mockup</span>
                                </div>
                            </div>
                            <div className="project__description">
                                <p className="project__name">Gotham Blog</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="current__stack">
                    <h3>Stack</h3>
                    <div className="stack__grid">
                        <div className="stack__item stack__html">
                            {/* <!-- HTML 5 Icon by Icon Mafia --> */}
                            <img src={html}
                                alt="HTML(Hypertext Markup Language) icon"
                                className="stack__img" />
                        </div>
                        <div className="stack__item stack__css">
                            {/* <!-- CCC Logo Icon by Pixel Icons --> */}
                            <img src={css}
                                alt="CSS(Cascading Style Sheets) Logo"
                                className="stack__img" />
                        </div>
                        <div className="stack__item stack__js">
                            {/* <!-- JavaScript Icon by Icon Mafia --> */}
                            <img src={javascript}
                                alt="JS(JavaScript) Logo"
                                className="stack__img" />
                        </div>
                        <div className="stack__item">
                            <img src={parcel}
                                alt="Parcel Bundler Logo"
                                className="stack__img" />
                        </div>
                        <div className="stack__item stack__npm">
                            {/* <!-- npm Icon by Icon Mafia  --> */}
                            <img src={npm}
                                alt="npm Logo"
                                className="stack__img" />
                        </div>
                    </div>
                </div>

                <div className="future__stack">
                    <h3>Experience with</h3>
                    <div className="stack__grid">
                        {/* <!-- React Icon by Icon Mafia  --> */}
                        <div className="stack__item">
                            <img src={react}
                                alt="ReactJS Logo"
                                className="stack__img" />
                        </div>
                        <div className="stack__item">
                            {/* <!-- NodeJS Icon by Icon Mafia --> */}
                            <img src={nodejs}
                                alt="nodeJS Logo"
                                className="stack__img" />
                        </div>
                        <div className="stack__item">
                            {/* <!-- mongoDB Icon by Icon Mafia --> */}
                            <img src={mongodb}
                                alt="mongoDB Logo"
                                className="stack__img" />
                        </div>
                    </div>
                </div>
                <div className="future__stack">
                    <h3>Future Additions to the Stack</h3>
                    <div className="stack__grid">
                        <div className="stack__item">
                            {/* <!-- Sass Icon by Icon Mafia --> */}
                            <img src={sass}
                                alt="SASS Logo"
                                className="stack__img sass__img" />
                        </div>
                        <div className="stack__item">
                            {/* <!-- ElectronJS Icon by Icon Mafia --> */}
                            <img src={electron}
                                alt="Electron.js Framework Logo"
                                className="stack__img" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Projects;