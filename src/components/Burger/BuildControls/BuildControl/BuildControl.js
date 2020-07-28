import React from 'react';
import buildControls from '../BuildControls';
// import classes from '*.module.css';
import classes from '../BuildControl/BuildControl.module.css'

const buildControl = (props) =>(
<div className={classes.BuildControl}>
<div>{props.label}</div>
<button className={classes.Less}>Less</button>
<button className={classes.More} onClick={props.added}>More</button>
</div>
);
export default buildControl;