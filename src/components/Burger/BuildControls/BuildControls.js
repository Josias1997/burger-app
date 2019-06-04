import React from 'react';
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type:'salad'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'},
];

const BuildControls = props => {
    const {ingredientAdded, ingredientRemoved,
        disabled, price, purchasable, ordered, isAuth} = props;
    return(
        <div className={classes.BuildControls}>
            <p>Current price : {price.toFixed(2)}</p>
            {
                controls.map((control) => (
                <BuildControl
                    key={control.label}
                    label={control.label}
                    type={control.type}
                    added={() => ingredientAdded(control.type)}
                    removed={() => ingredientRemoved(control.type)}
                    disabled={disabled[control.type]}
                />
                ))
            }
            <button
                className={classes.OrderButton}
                disabled={!purchasable}
                onClick={ordered}>{isAuth ? "ORDER NOW" : "SIGN UP TO ORDER"}</button>
        </div>
    );
};


export default BuildControls