import React, { Component } from 'react'
import classes from '../components/BurgerIngrediants.module.css'
import PropTypes from 'prop-types'
import BurgerBuilder from '../containers/burgerBuillder';

class BurgerIngrediants extends Component {
    render() {

        let ingrediant = null;
        switch (this.props.type) {

            case ('bread-bottom'):
                ingrediant = <div className={classes.BreadBottom}>  </div>;
                breack;
            case ('bread-top'):
                ingrediant = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingrediant = <div className={classes.Meat}></div>
                break;
            case ('chease'):
                ingrediant = <div className={classes.Chease}></div>
                break;
            case ('bacon'):
                ingrediant = <div className={classes.Bacon}></div>
                break;
            case ('salad'):
                ingrediant = <div className={classes.Salad}></div>
                break;
            default:
                ingrediant = null;
        }
        return ingrediant;
    };
}

BurgerIngrediants.PropTypes ={
    type : PropTypes.string.isRequired ;
}
export default BurgerIngrediants;