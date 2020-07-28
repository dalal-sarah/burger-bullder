import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'
//BuildControls

const controls = [
    { label: 'salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {
            controls.map(ctrl => (
                <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                // type={ctrl.type}
                added={() => props.ingrediantAdded(ctrl.type)}/>
            ))
        }
    </div>
);
export default buildControls