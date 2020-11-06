import React from 'react';
import AppMinMax from '../../components/inputs/minmax/index';
import cartModel from '../../store/cart';
import router from '../../store/router.js';
import { observer } from 'mobx-react';
import classes from '../cart/cart.module.scss'


const Cart = observer(class Cart extends React.Component {


    render() {

  let productsRows = [];
         productsRows = cartModel.cart.map((product, i) => {
            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <AppMinMax
                            min={1}
                            max={product.rest}
                            cnt={product.current}
                            onChange={(cnt) => cartModel.changeInCart(i, cnt)}
                        />
                    </td>
                    <td>{product.price * product.current}</td>
                    <td>
                        <button onClick={() =>cartModel.remove(product.id)} className={classes.cart__btn_delete}>
                            X
                            </button>
                    </td>
                </tr>
            );
        });

        return (
            <div className={classes.cart}>
                <h2>Корзина</h2>
                {productsRows.length === 0 ? <h5><b>Корзина пуста :(</b></h5> :

                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <td>Наименование</td>
                                <td>Цена (KZT)</td>
                                <td>Штук (1 ед.)</td>
                                <td>Стоимость</td>
                                <td>Удалить</td>
                            </tr>
                        </thead>
                        <tbody>
                            {productsRows}
                        </tbody>
                    </table>
                }
                <br></br>
                <h5>Сумма: {cartModel.total}</h5>
                <hr />
                <button className={classes.cart__btn_order} onClick={() => router.moveTo('order')}
                 disabled={cartModel.cart.length ===0}
                >
                    Оформить заказ
                </button>
            </div>
        );
    }
})

export default Cart;