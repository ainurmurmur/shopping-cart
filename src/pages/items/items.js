import React from 'react';
import cartModel from '../../store/cart';
import router from '../../store/router.js';
import {observer} from 'mobx-react';
import style from './items.module.css'

const Items = observer(class Items extends React.Component {

    render() {
        let productsRows = cartModel.products.map((product, i) => {
            return (
                <div key={product.id}>
                    <div>
                        <div className={style.block}>
                            {product.title}
                        </div>
                        <div className={style.block}>
                            <b>Price:</b> {product.price}
                        </div>
                        <div className={style.block}>
                            <b>Rest in warehouse:</b> {product.rest}
                        </div>
                        <button className="btn btn-secondary"  onClick={() => cartModel.add(i)}>
                            add to cart
                        </button>
                    </div>
                </div>
            );
        });

        return (
            <div>
                <h2>List of items:</h2>
                <div className={style.content}>
                    {productsRows}
                </div>
                <h3>Total: {cartModel.total}</h3>
                <hr/>
                <button className="btn btn-primary" onClick={() => router.moveTo('cart')}>
                    Open a Cart
                </button>
            </div>
        );
    }
})

export default Items;