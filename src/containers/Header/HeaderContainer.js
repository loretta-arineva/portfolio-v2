import React from 'react';

import Hamburger from '../../components/Navigation/Hamburger/Hamburger';
import Logo from '../../components/UI/Logo/Logo';

import classes from './HeaderContainer.module.css';
class Header extends React.Component {
    render() {
        return (
            <header className={classes.Header}>
                <Hamburger clicked={this.props.clicked} />
                <Logo />
            </header>
        );
    }
}
export default Header;