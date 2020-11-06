import React, { useState } from 'react';
import cartModel from '../../store/cart';
import { observer } from 'mobx-react';
import AppMinMax from '../../components/inputs/minmax/index'
import classes from './items.module.scss'


let ItemsRow =(props) =>{

    let [inCart, addToCart] = useState(false)

  
    let removeFromCart =(i) =>{
        addToCart(false)
        cartModel.remove(i)
    }
    let addToTheCart =(i) =>{
        
        if(props.current !==0){
            addToCart(true)
            cartModel.add(i, props.itemsType)
        }
        
    }

    return (
        <div key={props.id} className={classes.items__grid_item}>
            <div className={classes.items__grid_item_picture}>
                <img src={props.src} alt={'donut'} className={classes.items__grid_item_picture_medium} />
            </div>
            <div className={classes.items__grid_item_title}>
                <p>{props.title}</p>
            </div>
            <div className={classes.items__grid_item_block}>
                <div className={classes.items__grid_item_price}>
                    <p>{props.price}  тг</p>
                </div>
                    &nbsp;
                    &nbsp;
                    <div className={classes.items__grid_item_rest}>
                    <p>В наличии: {props.rest}</p>
                </div>
            </div>
            <AppMinMax min={0}
                max={props.rest}
                cnt={props.current}
                onChange={(cnt) => cartModel.change(props.i, cnt, props.itemsType)}
            />
            {inCart
                ? <button className={classes.items__grid_item_btn_true}
                    onClick={() => removeFromCart(props.id)} >
                    В корзине
                  </button>
                :
                <button className={classes.items__grid_item_btn_false}
                    onClick={() =>addToTheCart(props.i)}>
                    В корзину
                    </button>
            }
        </div>
    );
}

export default observer(ItemsRow);