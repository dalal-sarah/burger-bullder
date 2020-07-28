import React, { Component } from 'react'
import Auxx from '../hoc/Auxx'
import Burger from '../components/Burger/Burger'
import BuildControls from '../components/Burger/BuildControls/BuildControls'

const INGREDIANT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bbacon: 0.7
}

class BurgerBuilder extends Component {
    // constructor(props){

    //     super (props);

    // }
    state = {
        ingrediants: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        },
        totalPrice: 4
    }

    addIngrediantsHandler = (type) => {
        const oldCount = this.state.ingrediants[type];
        const updatedCounted = oldCount + 1;
        const updatedIngredints = {
            ...this.state.ingrediants
        };
        updatedIngredints[type] = updatedCounted;
        const priceAddtion = INGREDIANT_PRICES[type];
        const oldprice = this.state.totalPrice;
        const newPrice = oldprice + priceAddtion;
        this.setState({totalPrice: newPrice , ingrediants: updatedIngredints});
    }
    render() {
        return (
            <Auxx>
                <Burger ingrediants={this.state.ingrediants} />
                <BuildControls ingrediantAdded={this.addIngrediantsHandler}/>
            </Auxx>
        );
    }
}
export default BurgerBuilder