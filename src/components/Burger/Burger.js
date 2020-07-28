import React from 'react'
import classes from './Burger.module.css'
import BurgerIngrediant from '../BurgerIngredient'
// import BurgerBuilder from '../containers/burgerBuillder'

const burger = (props) => {
    const transformedIngrediaets = Object.keys(props.ingrediants)
        .map(igKey => {
            return [...Array(props.ingrediants[igKey])].map((_, i) => {
                return <BurgerIngrediant key={igKey + i} type={igKey} />;
            });
        }).reduce((arr , el)=>{
            return arr.concat(el);
        },[]);
        if (transformedIngrediaets === 0 ){
            transformedIngrediaets = <p> please start adding some ingrediants</p>
        }
    return (
        <div className={classes.Burger}>
            <BurgerIngrediant type="bread-top" />
           {transformedIngrediaets}
            <BurgerIngrediant type="bread-bottom" />
        </div>
    );
}
export default burger 