import React from 'react';
import classes from './DrawerToggle.module.css';

const DrawerToggle = props => {
    const {clicked} = props;
    return (
        <div onClick={clicked} className={classes.DrawerToggle}>
            <div>-</div>
            <div>-</div>
            <div>-</div>
        </div>
    )
};

export default DrawerToggle;