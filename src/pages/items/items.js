import React, {useState} from 'react';
import cartModel from '../../store/cart';
import router from '../../store/router.js';
import { observer } from 'mobx-react';
import classes from './items.module.scss'
import AppMinMax from '../../components/inputs/minmax/index'

let Items =(props) =>{

       debugger

        let [itemsType, setItemsType] = useState('sweet');

         let changeItemsType=(type) =>{

            setItemsType(type)
        }

        let productsRows = cartModel.products[itemsType].map((product, i) => {

            return (
                <div key={product.id} className={classes.items__grid_item}>
                    <div className={classes.items__grid_item_picture}>
                        <img src={product.src} alt={'donut'} className={classes.items__grid_item_picture_medium} />
                    </div>
                    <div className={classes.items__grid_item_title}>
                        <p>{product.title}</p>
                    </div>
                    <div className={classes.items__grid_item_block}>
                        <div className={classes.items__grid_item_price}>
                        <p>{product.price}  тг</p>
                        </div>
                        &nbsp;
                        &nbsp;
                        <div className={classes.items__grid_item_rest}>
                            <p>Rest: {product.rest}</p>
                        </div>
                    </div>
                    <AppMinMax min={0} 
                                   max={product.rest} 
                                   cnt={product.current} 
                                   onChange={(cnt) => cartModel.change(i, cnt, itemsType)}
                        />
                    <button className={classes.items__grid_item_btn} onClick={() => cartModel.add(i, itemsType)}>
                        В корзину
                        </button>
                </div>
            );
        });

        //%PUBLIC_URL%/

        return (
            <div className={classes.items}>
                <h2>Категории продукции:</h2>
                <div className = {classes.items__category}>
                    <div onClick={() => changeItemsType("sweet")}>
                    <p>Сладкие</p>
                    <img src='./donuts1.png' className={classes.items__category_pic} alt='category'/>
                    </div>
                    <div onClick={() => changeItemsType("withCreme")}>
                    <p>Пончики с начинкой</p>
                    <img src='./donuts9.png' className={classes.items__category_pic} alt='category'/>
                    </div>
                    <div onClick={() => changeItemsType("notSweet")}>
                    <p>Пончики несладкие</p>
                    <img src='./donuts14.png' className={classes.items__category_pic} alt='category'/>
                    </div>
                    <div onClick={() => changeItemsType("coffee")}>
                    <p>Горячие напитки</p>
                    <img src='./coffee.png' className={classes.items__category_pic} alt='category'/>
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