import React from 'react';
import classes from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';

const NavigationItem = props => {
    const {link, children, exact} = props;
    return (
        <li className={classes.NavigationItem}>
            <NavLink
                to={link}
                exact={exact}
                activeClassName={classes.active}
            >
                {children}
            </NavLink>
        </li>
    );
};

export default NavigationItem;