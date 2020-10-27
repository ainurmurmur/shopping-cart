import React from 'react';

import cartModel from '../../store/cart';

export default class extends React.Component{
    render(){
        return (
            <div>
                <h2>Congratulations!</h2>
                <p><strong>Total: {cartModel.total}</strong></p>
            </div>
        )
    }
}