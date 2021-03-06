import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const burgerBuilder = (state = initialState, action) => {
        switch(action.type) {
            case actionTypes.ADD_INGREDIENT:
                return {
                    ...state,
                    ingredients: {
                        ...state.ingredients,
                        [action.property]: state.ingredients[action.property] + 1
                    },
                    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.property],
                    building: true
                };
            case actionTypes.REMOVE_INGREDIENT:
                return {
                    ...state,
                    ingredients: {
                        ...state.ingredients,
                        [action.property]: state.ingredients[action.property] - 1
                    },
                    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.property],
                    building: true
                };
            case actionTypes.SET_INGREDIENTS:
                return  {
                    ...state,
                    ingredients: action.ingredients,
                    totalPrice: 4,
                    error: false,
                    building: false
                };
            case actionTypes.FETCH_INGREDIENTS_FAILED:
                return {
                    ...state,
                    error: true
                };
            default:
                return state;
        }
};

export default burgerBuilder;
