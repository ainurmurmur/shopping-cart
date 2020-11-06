import React, { useState } from 'react';
import cartModel from '../../store/cart';
import router from '../../store/router.js';
import { observer } from 'mobx-react';
import classes from './items.module.scss'
import ItemsRow from './ItemsRow'


let Items = (props) => {

    let [itemsType, setItemsType] = useState('sweet');
   
    let changeItemsType = (type) => {

        setItemsType(type)
    }
    
   
    let productsRows = cartModel.products[itemsType].map((product, i) => <ItemsRow key={product.id} 
                                                        id={product.id}
                                                        src={product.src} i={i} itemsType={itemsType}
                                                        title={product.title}
                                                        price={product.price}
                                                        rest={product.rest} current={product.current}
    
    />);

    //%PUBLIC_URL%/

    return (
        <div className={classes.items}>
            <h2>Категории продукции:</h2>
            <div className={classes.items__category}>
                <div onClick={() => changeItemsType("sweet")} className={classes.items__category_active}
                 disabled={itemsType !== 'sweet'}
                >
                    <p>Сладкие</p>
                    <img src='./donuts1.png' className={classes.items__category_pic}
                    alt='category' />
                </div>
                <div onClick={() => changeItemsType("withCreme")}  className={classes.items__category_active}
                 disabled={itemsType !== 'withCreme'}
                 >
                    <p>Пончики с начинкой</p>
                    <img src='./donuts9.png' className={classes.items__category_pic} alt='category' />
                </div>
                <div onClick={() => changeItemsType("notSweet")} className={classes.items__category_active}
                 disabled={itemsType !== 'notSweet'}>
                    <p>Пончики несладкие</p>
                    <img src='./donuts14.png' className={classes.items__category_pic} alt='category' />
                </div>
                <div onClick={() => changeItemsType("coffee")} className={classes.items__category_active}
                 disabled={itemsType !== 'coffee'}>
                    <p>Горячие напитки</p>
                    <img src='./coffee.png' className={classes.items__category_pic} alt='category' />
                </div>
            </div>
            <div className={classes.items__grid}>
                {productsRows}
            </div>
            <hr />
            <div className={classes.items__total}>
                <h5>Общая стоимость: &nbsp;</h5>
                <h5>{cartModel.total}</h5> &nbsp;<h5>тенге</h5>&nbsp;&nbsp;
                    <button className={classes.items__total_btn} onClick={() => router.moveTo('cart')}>
                    Открыть корзину
                </button>
            </div>
        </div>
    );
}

export default observer(Items);

