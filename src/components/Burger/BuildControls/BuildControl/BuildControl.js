import React from 'react';
import classes from './BuildControl.module.css';

const BuildControl = (props) => {
    const {label, added, removed, disabled} = props;
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{label}</div>
            <button className={classes.Less} onClick={removed} disabled={disabled}>
                Less
            </button>
            <button className={classes.More} onClick={added}>
                More
            </button>
        </div>
    );
};
export default BuildControl;