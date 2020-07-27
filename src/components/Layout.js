import React from 'react';
import Auxx from '../hoc/Auxx'

const layout = (props ) => (
    <Auxx>
    <div> </div>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>
        {props.childern}
    </main>
    </Auxx>
);
