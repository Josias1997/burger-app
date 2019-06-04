import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // This can be a functional component 
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Order Summary did update');
    }

    render () {
        const {ingredients, purchaseCancelled, purchaseContinued, price} = this.props;
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
    }
}

export default OrderSummary