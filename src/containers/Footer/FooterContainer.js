import React from 'react';
// import Footer

import FooterNav from '../../components/Footer/FooterNav/FooterNav';
import SocialIcons from '../../components/Footer/SocialIcons/SocialIcons';
import Copyright from '../../components/Footer/Copyright/Copyright';

import classes from './FooterContainer.module.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className={classes.Footer}>
                <FooterNav />
                <SocialIcons />
                <Copyright currentYear={this.props.currentYear} />
            </footer>
        );
    }
}
export default Footer;