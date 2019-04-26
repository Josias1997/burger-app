import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = props => {
    let transformedIngredients = Object.keys(props.ingredients).map(ingredientKey => {
        return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
            return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
        })
    }).reduce((previous, current) => {
        return previous.concat(current);
    }, []);
    console.log(transformedIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={"bread-top"}/>
                {
                    transformedIngredients.length !== 0 ? transformedIngredients:<p>Please Add Ingredients</p>
                }
            <BurgerIngredient type={"bread-bottom"}/>
        </div>
    );
};

export default Burger;