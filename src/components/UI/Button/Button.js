import React from 'react';
import classes from './Button.module.css'

const Button = props => {
    const {clicked, btnType, children, disabled, type} = props;
    return (
        <button
            className={[classes.Button, classes[btnType]].join(' ')}
            type={type}
            onClick={clicked}
            disabled={disabled}>
            {children}
        </button>
    )
};
export default Button;