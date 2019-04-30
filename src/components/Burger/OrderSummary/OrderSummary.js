import React from 'react';
import Aux from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button';

const OrderSummary = props => {
    const {ingredients, purchaseCancelled, purchaseContinued, price} = props;
    const ingredientSummary = Object.keys(ingredients).map(ingredientKey => {
        return (
            <li key={ingredientKey}>
            <span style={{textTransform: 'capitalize'}}>
                {ingredientKey}
            </span>:
                {ingredients[ingredientKey]}
        </li>
        );
    });
    return (
      <Aux>
          <h3>Your Order</h3>
          <p>A delicious burger with the following ingredients</p>
          <ul>
              {ingredientSummary}
          </ul>
          <p><strong>Total Price: {price.toFixed(2)}</strong></p>
          <p>Continue to checkout ?</p>
          <Button btnType={"Danger"} clicked={purchaseCancelled}>Cancel</Button>
          <Button btnType={"Success"} clicked={purchaseContinued}>Continue</Button>
      </Aux>
    );
};

export default OrderSummary