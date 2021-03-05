import React from 'react';

import About from '../About/About';
import Projects from '../Projects/Projects';

import Aux from '../../hoc/Aux/Aux';
import Hero from '../../components/Home/Hero/Hero';
class Main extends React.Component {
    render() {
        return (
            <Aux>
                <Hero />
                <About />
                <Projects />
            </Aux>
        );
    }
}
export default Main;