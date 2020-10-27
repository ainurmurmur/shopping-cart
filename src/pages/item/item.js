import React from 'react';
import cartModel from '../../store/cart';
import router from '../../store/router.js';
import {observer} from 'mobx-react';


const Item = observer (class Item extends React.Component{

    render(){
        let productsRows = cartModel.products.map((product, i) => {
            return (
                <tr key={product.id}>
                    <td>
                        {product.title}
                        {product.price}
                        {product.current}
                        <button onClick={() => cartModel.remove(i)}>
                            X
                        </button>
                    </td>
                </tr>
            );
        });

        return (
            <div>
                <h2>Item</h2>
                <table className="table table-bordered">
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

export default Item;