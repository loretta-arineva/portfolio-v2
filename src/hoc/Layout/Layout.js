import React from 'react';
import { Route } from 'react-router-dom';

import Main from '../../containers/Main/Main';
import Aux from '../Aux/Aux';
import Header from '../../containers/Header/HeaderContainer';
import Footer from '../../components/Footer/Footer';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';
import heroView from '../../components/Home/Hero/HeroFunction/herFunction';

class Layout extends React.Component {
    state = {
        showSideDrawer: false,
        ESCAPE_KEY: "Escape",
        width: window.innerWidth,
        height: window.innerHeight,
        top: document.body.getBoundingClientRect().top,
        currentYear: new Date().getFullYear(),
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: true });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    updateViewportSize = function(){
        this.state.width = window.innerWidth;
        this.state.height = window.innerHeight;
    }

    _handleKeyDown = (event) => {
        switch (event.key) {
            case this.state.ESCAPE_KEY:
                this.setState((prevState) => {
                    return { showSideDrawer: false };
                });
                break;
            default:
                break;
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this._handleKeyDown);
    }

    render() {
        return (
            <Aux>
                <Header clicked={this.sideDrawerClosedHandler} />
                <SideDrawer open={this.state.showSideDrawer} close={this.sideDrawerToggleHandler} esc={this.closeSideDrawerHandler} top={this.state.top}/>
                <main className={classes.Layout}>
                    <Route path="/" exact component={Main} />
                </main>
                <Footer currentYear={this.state.currentYear}/>
            </Aux>
        );
    }
}

export default Layout;