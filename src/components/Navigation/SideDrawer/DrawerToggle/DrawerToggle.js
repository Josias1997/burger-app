import React from 'react';

const DrawerToggle = props => {
    const {clicked} = props;
    return (
        <div onClick={clicked}>Menu</div>
    )
};

export default DrawerToggle;