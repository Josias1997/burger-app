import React from 'react';
import classes from './Input.module.css';

const Input = props => {
    const {
        elementType,
        label, changed,
        invalid, shouldValidate,
        touched, valueType
    } = props;
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if (invalid && shouldValidate && touched) {
        inputClasses.push(classes.Invalid);
    }
    switch (elementType) {
        case('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={changed}
            />;
            break;
        case('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={changed}
            />;
            break;
        case('select'):
            inputElement = <select className={inputClasses.join(' ')}
                                   value={props.value}
                                   onChange={changed}
            >
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>{
                        option.displayValue}
                    </option>
                ))}
            </select>;
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={changed}
            />;
            break;
    }
    // let validationError = null;
    // if(invalid && touched) {
    //     validationError = <p className={classes.ValidationError}>
    //         Please enter a valid {valueType} !
    //     </p>
    // }
    return (
        <div className={classes.Input}>
            {/*{validationError}*/}
            <label className={classes.Label}>{label}</label>
            {inputElement}
        </div>
    )
};

export default Input;