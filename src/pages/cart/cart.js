import React from 'react';
import AppMinMax from '../../components/inputs/minmax/index';
import cartModel from '../../store/cart';
import router from '../../store/router.js';
import {observer} from 'mobx-react';


const Cart = observer (class Cart extends React.Component{
    render(){
        let productsRows = cartModel.products.map((product, i) => {
            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <AppMinMax min={1} 
                                   max={product.rest} 
                                   cnt={product.current} 
                                   onChange={(cnt) => cartModel.change(i, cnt)}
                        />
                    </td>
                    <td>{product.price * product.current}</td>
                    <td>
                        <button onClick={() => cartModel.remove(i)}>
                            X
                        </button>
                    </td>
                </tr>
            );
        });

        return (
            <div>
                <h2>Cart</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Price</td>
                            <td>Count</td>
                            <td>Total</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {productsRows}
                    </tbody> 
                </table>
                <h3>Total: {cartModel.total}</h3>
                <hr/>
                <button className="btn btn-primary" onClick={() => router.moveTo('order')}>
                    Send
                </button>
            </div>
        );
    }
})

export default Cart;